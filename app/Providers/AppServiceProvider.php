<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\URL;
use App\Models\User;
use Carbon\Carbon;
use Config;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        VerifyEmail::toMailUsing(function ($notifiable) {
            $verifyUrl = URL::temporarySignedRoute(
                'verification.verify',
                Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
                [
                    'id' => $notifiable->getKey(),
                    'hash' => sha1($notifiable->getEmailForVerification()),
                ]
            );
            
            $user = User::whereEmail($notifiable->getEmailForVerification())->first();

            return (new MailMessage)
                ->subject('Bem vindo a Digaflix')
                ->markdown('emails.verify-email', ['user' => $user, 'verifyUrl' => $verifyUrl]);
        });
        ResetPassword::toMailUsing(function ($notifiable){
            $resetUrl = URL::temporarySignedRoute(
                'verification.passwordReset',
                Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
                [
                    'id' => $notifiable->getKey(),
                    'hash' => sha1($notifiable->getEmailForVerification()),
                ]
            );

            $user = User::whereEmail($notifiable->getEmailForVerification())->first();
            
            return (new MailMessage)
                ->subject('Digaflix, troca de senha!')
                ->markdown('emails.reset-email', ['user' => $user, 'resetUrl' => urlencode($resetUrl)]);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
