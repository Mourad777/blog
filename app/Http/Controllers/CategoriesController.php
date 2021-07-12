<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();

        return $categories;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $category = new Category;
        $category->name = Str::lower($request->name);
        $category->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($category)
    {

        $categoryId = Category::where('name', Str::lower($category))->get()[0]->id;

        $category = Category::find($categoryId);

        Log::info('cat--- *&'.$category);
        $posts = $category->posts;
        $photos = $category->photos;
        $videos = $category->videos;
        Log::info($videos);
        Log::info($photos);
        $posts->map(function ($post) {
            if ($post->image) {
                $post->image = Storage::disk(name: 's3')->url($post->image);
            }
            Log::info('counting comments for each post' . count($post->comments));
            $post->categories = $post->categories()->get();
            $post->comments = $post->comments()->get();

            return $post;
        });

        $photos->map(function ($photo) {
            $photo->src = Storage::disk(name: 's3')->url($photo->url);
            $photo->height = 1;
            $photo->width = 1.5;
            $photo->categories = $photo->categories()->get();
            return $photo;
        });

        $videos->map(function ($video) {
            $video->src = Storage::disk(name: 's3')->url($video->url);
            if ($video->thumbnail) {
                $video->thumbnail = Storage::disk(name: 's3')->url($video->thumbnail);
            }
            $video->categories = $video->categories()->get();
            return $video;
        });
        return ["posts" => $posts, "photos" => $photos, "videos" => $videos];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $category = Category::find($id);
        $category->name = $request->name;
        $category->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
