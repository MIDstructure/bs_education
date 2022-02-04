<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/token', function (Request $request) { 
    return csrf_token(); 
});

Route::prefix( 'v1' )->group( function() 
{
    Route::get(     'user/get',              'UserController@getUser');  // Берем Юзера
    Route::post(    'ads_post',              'AdsController@adsPost');  // Берем Юзера
});
