<?php

use App\Http\Controllers\AjaxController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/items-by-serial-number', [AjaxController::class, 'getItemsBySerialNumber']);
Route::get('/items-by-id/{id}', [AjaxController::class, 'getItemsById']);
Route::get('/students-by-name', [AjaxController::class, 'getStudentByName']);
Route::get('/studentsFetch', [AjaxController::class, 'getStudentAttandnace']);
Route::get('/teachersFetch', [AjaxController::class, 'getTeacherAttandnace']);
Route::get('/feeFetch', [AjaxController::class, 'feeFetch']);
Route::get('/attendFetch', [AjaxController::class, 'attendFetch']);
