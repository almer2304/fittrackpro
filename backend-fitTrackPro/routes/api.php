<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/sign-up', [AuthController::class, 'register']);
Route::post('/sign-in', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function(){
    Route::delete('/logout', [AuthController::class, 'logout']);
});
