<?php

namespace App\Http\Controllers;

use App\Post;
use App\Photo;
use App\Video;
use Storage;

use Illuminate\Support\Facades\Log;

class CountriesController extends Controller
{
    public function show($country_iso)
    {

        $posts = Post::where("country", "=", $country_iso)->get();
        $photos = Photo::where("country", "=", $country_iso)->get();
        $videos = Video::where("country", "=", $country_iso)->get();

        $posts->map(function ($post) {
            if ($post->image) {
                $post->image = Storage::disk(name: 's3')->url($post->image);
            }
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
        return ["posts"=>$posts,"photos"=>$photos,"videos"=>$videos];
    }
}