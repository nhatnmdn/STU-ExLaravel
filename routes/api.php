<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/get-products','Api\ProductController@getList');
Route::post('/store','Api\ProductController@store');
Route::put('/update/{id}','Api\ProductController@update')->name('product.update');
Route::delete('/delete/{id}','Api\ProductController@delete')->name('product.delete');
