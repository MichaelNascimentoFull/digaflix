<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class VerificationController extends Controller
{
    public function verify($user_id, Request $request)
    {
        if (! $request->hasValidSignature()) {
            return response()->json(['msg' => 'Url inválida/expirada.'], 401);
        }

        $user = User::withoutGlobalScopes()->findOrFail($user_id);

        if (! $user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        return redirect()->to('http://localhost:8000');
    }
    public function resend($user_email)
    {
        $user = User::whereEmail($user_email)->first();
        if ($user->hasVerifiedEmail()) {
            return response()->json(['msg' => 'O email já foi verificado.'], 400);
        }

        $user->sendEmailVerificationNotification();

        return response()->json(['msg' => 'Um email com o link de verificação foi enviado para seu email']);
    }

    public function passwordReset($user_id, Request $request)
    {
        $user = User::findOrFail($user_id);

        if (! $request->hasValidSignature()) {
            return response()->json(['msg' => 'Url inválida/expirada.'], 401);
        }

        $user->password = bcrypt($request->header('newPassword'));
        $user->save();
        //bcrypt($request->password)
        return  response()->json(['msg' => 'A senha foi trocada']);
    }

    public function sendReset($user_email)
    {
        $user = User::whereEmail($user_email)->first();
        //return $user;
        $user->sendPasswordResetNotification($user_email);

        return response()->json(['msg' => 'Um email com o link para nova senha foi enviado para seu email']);
    }
}
