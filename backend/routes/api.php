<?php

use App\Http\Controllers\ExampleListController;
use Illuminate\Support\Facades\Route;

Route::get('/example-list', [ExampleListController::class, 'index']);

