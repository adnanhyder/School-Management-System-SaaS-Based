<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;



Route::redirect('/', '/admin');

Route::middleware(['auth', 'verified' , 'role:admin'])->group(function () {
    Route::get('/admin', [DashboardController::class, 'admin'])
        ->name('dashboardAdmin');
    Route::resource('project', ProjectController::class);
    Route::get('/task/my-tasks', [TaskController::class, 'myTasks'])
        ->name('task.myTasks');
    Route::resource('task', TaskController::class);
    Route::resource('user', UserController::class);
    Route::resource('role', \App\Http\Controllers\RoleController::class);

});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
