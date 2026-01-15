<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\AuthController;

Route::get('/', function () {
    return redirect('/login');
});

Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.post');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    })->name('dashboard');
    Route::resource('projects', ProjectController::class);
    Route::resource('posts', PostController::class);
    Route::resource('skills', \App\Http\Controllers\Admin\SkillController::class);
    Route::resource('about-sections', \App\Http\Controllers\Admin\AboutSectionController::class);
    Route::get('/contact', [\App\Http\Controllers\Admin\ContactInfoController::class, 'edit'])->name('contact.edit');
    Route::put('/contact', [\App\Http\Controllers\Admin\ContactInfoController::class, 'update'])->name('contact.update');

    // Messages routes
    Route::get('/messages', [\App\Http\Controllers\Admin\MessageController::class, 'webIndex'])->name('messages.index');
    Route::patch('/messages/{id}/read', [\App\Http\Controllers\Admin\MessageController::class, 'markAsRead'])->name('messages.read');
    Route::delete('/messages/{id}', [\App\Http\Controllers\Admin\MessageController::class, 'destroy'])->name('messages.destroy');
});