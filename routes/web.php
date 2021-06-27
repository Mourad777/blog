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

// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

Route::post('/api/tinymce/upload', 'TinymceImageUploadController@store');


Route::get('/api/posts', 'PostsController@index');

Route::get('/api/posts/show/{id}', 'PostsController@show');

Route::post('/api/posts/save', 'PostsController@store');

Route::post('/api/posts/update/{id}', 'PostsController@update');

Route::get('/api/posts/create/{id}', 'PostsController@create');

Route::get('/api/posts/edit/{id}', 'PostsController@edit');

Route::delete('/api/posts/delete/{id}', 'PostsController@destroy');



Route::get('/api/categories', 'CategoriesController@index');

Route::post('/api/categories/save', 'CategoriesController@store');

Route::post('/api/categories/update/{id}', 'CategoriesController@update');

Route::delete('/api/categories/delete/{id}', 'CategoriesController@destroy');


Route::get('/api/comments/post/{id}', 'CommentsController@index');

Route::post('/api/comments/save', 'CommentsController@store');

Route::post('/api/comments/{id}/update', 'CommentsController@update');

Route::delete('/api/comments/{id}/delete', 'CommentsController@destroy');

Route::post('/api/comments/approve-comment', 'CommentsController@approve_comment');


Route::get('/api/photos', 'PhotosController@index');

Route::post('/api/photos/save', 'PhotosController@store');

Route::post('/api/photos/update/{id}', 'PhotosController@update');

Route::delete('/api/photos/delete/{id}', 'PhotosController@destroy');


Route::get('/api/videos', 'VideosController@index');

Route::post('/api/videos/save', 'VideosController@store');

Route::post('/api/videos/update/{id}', 'VideosController@update');

Route::delete('/api/videos/delete/{id}', 'VideosController@destroy');


Route::get('/api/configurations', 'ConfigurationsController@index');

Route::post('/api/configurations/update', 'ConfigurationsController@update');


Route::get('/{any?}', function () {
    return view('index');
})->where('any', '^((?!api).)*$');


// Route::get('{reactRoutes}', function () {
//     return view('welcome'); // your start view
// })->where('reactRoutes', '^((?!api).)*$'); // except 'api' word
