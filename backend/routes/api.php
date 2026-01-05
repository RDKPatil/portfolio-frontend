<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{slug}', [ProjectController::class, 'show']);

Route::get('/skills', [\App\Http\Controllers\Api\SkillController::class, 'index']);
Route::get('/about', [\App\Http\Controllers\Api\AboutController::class, 'index']);
Route::get('/contact', [\App\Http\Controllers\Api\ContactController::class, 'index']);
Route::get('/posts', [\App\Http\Controllers\Api\PostController::class, 'index']);
