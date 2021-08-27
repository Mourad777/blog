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

//public routes
Route::post('/api/login', 'AuthController@login');
Route::post('/api/register', 'AuthController@register');


Route::get('/api/public-posts', 'PostsController@index');
Route::get('/api/public-posts/{id}', 'PostsController@show');

Route::get('/api/categories', 'CategoriesController@index');
Route::get('/api/categories/{category}', 'CategoriesController@show');

Route::get('/api/countries', 'CountriesController@index');
Route::get('/api/countries/{country_iso}', 'CountriesController@show');

Route::get('/api/public-comments/{doc_type}/{id}', 'CommentsController@index');
Route::post('/api/comments/save', 'CommentsController@store');

Route::get('/api/photos', 'PhotosController@index');
Route::get('/api/photo/{id}', 'PhotosController@show');

Route::get('/api/videos', 'VideosController@index');
Route::get('/api/videos/{id}', 'VideosController@show');

Route::get('/api/configurations', 'ConfigurationsController@index');

Route::post('/api/messages/save', 'MessagesController@store');

Route::get('api/send-mail','MailController@sendMail')->name('mail');

Route::post('/api/subscribe', 'SubscribersController@store');

//protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    //editor media upload
    Route::post('/api/tinymce/upload', 'TinymceImageUploadController@store');

    //messages
    Route::get('/api/messages', 'MessagesController@index');

    //subscribers
    Route::get('/api/subscribers', 'SubscribersController@index');

    Route::post('/api/subscribers/delete/{id}', 'SubscribersController@destroy');

    //posts
    Route::get('/api/posts/{id}', 'PostsController@show');

    Route::get('/api/posts', 'PostsController@index');
    
    Route::post('/api/posts/save', 'PostsController@store');

    Route::get('/api/posts/edit/{id}', 'PostsController@edit');

    Route::post('/api/posts/update/{id}', 'PostsController@update');

    Route::get('/api/posts/create/{id}', 'PostsController@create');

    Route::get('/api/comments/{doc_type}/{id}', 'CommentsController@index');


    Route::delete('/api/posts/delete/{id}', 'PostsController@destroy');
    //categories
    Route::post('/api/categories/save', 'CategoriesController@store');

    Route::post('/api/categories/update/{id}', 'CategoriesController@update');

    Route::delete('/api/categories/delete/{id}', 'CategoriesController@destroy');
    //countries
    Route::post('/api/countries/save', 'CountriesController@store');

    Route::post('/api/countries/update/{id}', 'CountriesController@update');

    Route::delete('/api/countries/delete/{id}', 'CountriesController@destroy');
    //comments
    Route::post('/api/comments/{id}/update', 'CommentsController@update');

    Route::delete('/api/comments/delete/{id}', 'CommentsController@destroy');

    Route::post('/api/comments/approve-comment', 'CommentsController@approve_comment');
    //photos
    Route::post('/api/photos/save', 'PhotosController@store');

    Route::post('/api/photos/update/{id}', 'PhotosController@update');

    Route::delete('/api/photos/delete/{id}', 'PhotosController@destroy');
    //videos
    Route::post('/api/videos/save', 'VideosController@store');

    Route::post('/api/videos/update/{id}', 'VideosController@update');

    Route::delete('/api/videos/delete/{id}', 'VideosController@destroy');

    //configuration
    Route::post('/api/configurations/update', 'ConfigurationsController@update');

    //messages
    Route::get('/api/message/{id}', 'MessagesController@show');

    Route::post('/api/upload/store', 'UploadController@upload');

    Route::post('/api/logout', 'AuthController@logout');
});

// Route::get('/{any?}', function () {
//     return view('index');
// })->where('any', '^((?!api).)*$');
