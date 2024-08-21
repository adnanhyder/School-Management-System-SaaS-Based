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
