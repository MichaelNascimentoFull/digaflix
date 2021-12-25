<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\MoviesController;
use App\Http\Controllers\TagsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/email/verify/{id}', [VerificationController::class, 'verify'])->name('verification.verify');
    Route::get('email/resend/{id}', [VerificationController::class, 'resend'])->name('verification.resend');
    Route::get('email/sendReset/{id}', [VerificationController::class, 'sendReset'])->name('verification.sendReset');
    Route::post('email/passwordReset/{id}', [VerificationController::class, 'passwordReset'])->name('verification.passwordReset');
    Route::apiResources([
        'movies' => MoviesController::class,
        'tags' => TagsController::class,
    ]);
});
