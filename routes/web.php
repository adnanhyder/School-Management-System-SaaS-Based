<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::middleware(['role:test'])->group(function () {
//    Route::get('/admin', function () {
//        return 'Admin Area';
//    });
//});
Route::redirect('/', '/dashboard');
Route::redirect('/admin', '/dashboardAdmin');
Route::middleware(['auth', 'verified' , 'role:admin'])->group(function () {

    Route::get('/admin', [DashboardController::class, 'admin'])
        ->name('dashboardAdmin');

    Route::resource('test', TaskController::class);
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');
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