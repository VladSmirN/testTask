<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('reviews')->group(function () {
    Route::get('show', 'ReviewsController@show')->name('reviews.show'); 
    Route::post('store', 'ReviewsController@store')->name('reviews.store');
    Route::get('/', 'ReviewsController@getReviews')->name('reviews.getReviews');
    
});
