<?php

use App\Http\Controllers\ImagesController;
use App\Models\Images;
use Illuminate\Support\Facades\Route;

Route::get('/images', [ImagesController::class, 'index']);
Route::post('/images', [ImagesController::class, 'store']);

