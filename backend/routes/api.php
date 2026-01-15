<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Admin routes (TODO: Add authentication later)
Route::prefix('admin')->group(function () {
    Route::get('/messages', [\App\Http\Controllers\Admin\MessageController::class, 'index']);
    Route::patch('/messages/{id}/read', [\App\Http\Controllers\Admin\MessageController::class, 'markAsRead']);
    Route::delete('/messages/{id}', [\App\Http\Controllers\Admin\MessageController::class, 'destroy']);
});

// Public routes
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{slug}', [ProjectController::class, 'show']);

Route::get('/skills', [\App\Http\Controllers\Api\SkillController::class, 'index']);
Route::get('/about', [\App\Http\Controllers\Api\AboutController::class, 'index']);
Route::get('/contact', [\App\Http\Controllers\Api\ContactController::class, 'index']);
Route::post('/contact', [\App\Http\Controllers\Api\ContactController::class, 'store']);
Route::get('/posts', [\App\Http\Controllers\Api\PostController::class, 'index']);
Route::get('/posts/{slug}', [\App\Http\Controllers\Api\PostController::class, 'show']);
