<?php

use App\Http\Controllers\ImagesController;
use App\Http\Controllers\FileController;
use Illuminate\Support\Facades\Route;

// 一覧
Route::get('/images', [ImagesController::class, 'index']);
Route::post('/images', [ImagesController::class, 'store']);

// 画像アップロード
Route::get('/upload', [FileController::class, 'upload']);
Route::post('/upload', [FileController::class, 'upload']);
