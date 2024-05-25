<?php

use App\Http\Controllers\ImagesController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FavoriteController;
use Illuminate\Support\Facades\Route;

// 一覧
Route::get('/images', [ImagesController::class, 'index']);
Route::post('/images', [ImagesController::class, 'store']);

// 画像アップロード
Route::get('/upload', [FileController::class, 'upload']);
Route::post('/upload', [FileController::class, 'upload']);

// ユーザー
Route::get('/user', [UserController::class, 'store']);
Route::post('/user', [UserController::class, 'store']);

// お気に入り
Route::get('/favorite', [FavoriteController::class, 'index']);
Route::post('/favorite', [FavoriteController::class, 'store']);
