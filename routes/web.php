<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.main_content');
});
Route::get('/user', function () {
    return view('pages.user_content');
});
