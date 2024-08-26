<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClassesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FeeCategoryController;
use App\Http\Controllers\FeesController;
use App\Http\Controllers\GatepassController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SchoolController;
use App\Http\Controllers\SessionsController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TattendanceController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::redirect('/', '/login');

// Routes accessible by both 'company' and 'admin' roles
Route::middleware(['auth', 'verified', 'role:school,admin'])->group(function () {

});

// Routes accessible only by 'admin' role
Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {

    Route::resource('user', UserController::class);
    Route::resource('role', RoleController::class);
    Route::resource('school', SchoolController::class);
    Route::get('/task/my-tasks', [TaskController::class, 'myTasks'])
        ->name('task.myTasks');
    Route::get('/admin', [DashboardController::class, 'admin'])
        ->name('dashboard.admin');
    Route::resource('task', TaskController::class);
    Route::resource('project', ProjectController::class);

});

// Routes accessible only by 'company' role (if needed)
Route::middleware(['auth', 'verified', 'role:school'])->group(function () {
    //only for test purpose
    Route::get('/dashboard', [DashboardController::class, 'school'])
        ->name('dashboard.school');



    Route::resource('student', StudentController::class);
    Route::resource('class', ClassesController::class);
    Route::resource('teacher', TeacherController::class);
    Route::resource('category', CategoryController::class);
    Route::resource('item', ItemController::class);
    Route::resource('gatepass', GatepassController::class);
    Route::resource('sessions', SessionsController::class);
    Route::resource('fee', FeesController::class);
    Route::get('/feebyclass', [FeesController::class, 'generateByClass'])
        ->name('fee.createbyclass');
    Route::get('/feebystudent', [FeesController::class, 'generateByStudent'])
        ->name('fee.createbystudnet');
    Route::post('/markPayment', [FeesController::class, 'markPayment'])
        ->name('fee.markPayment');
    Route::get('/markPayment', [FeesController::class, 'index']);

    Route::resource('feeCategory', FeeCategoryController::class);
    Route::resource('attendance', AttendanceController::class);
    Route::resource('tattendance', TattendanceController::class);

    Route::patch('/selectSchool', [SchoolController::class, 'selectSchool'])->name('school.selectSchool');
});

// Routes accessible only by any role (if needed)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
