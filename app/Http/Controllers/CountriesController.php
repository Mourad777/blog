<?php

namespace App\Http\Controllers;

use App\Post;
use App\Photo;
use App\Video;
use App\Country;
use Intervention\Image\Facades\Image;
use Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CountriesController extends Controller
{
    public function index()
    {
        $countries = Country::all();

        $countries->map(function ($country) {
            $country->image = Storage::disk(name: 's3')->url($country->image);
            return $country;
        });

        return $countries;
    }

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
        return ["posts" => $posts, "photos" => $photos, "videos" => $videos];
    }

    public function store(Request $request)
    {
        $country = new Country;
        $country->country = $request->country;
        $s3 = Storage::disk('s3');


        $country_image_file = $request->file('image');
        $extension = $country_image_file->extension();
        $filename = md5(time()) . '_' . $country_image_file->getClientOriginalName();

        $orientation = Image::make($country_image_file)->exif('Orientation');

        $resized_file = Image::make($country_image_file)->rotate($orientation === 8 ? 90 : 0)->resize(1200, null, function ($constraint) {
            $constraint->aspectRatio();
        })->encode($extension);
        $file_key = 'country-thumbnails/' . $filename;

        $s3->put($file_key, (string)$resized_file, 'public');

        $country->image = $file_key;

        $country->save();
    }

    public function update(Request $request, $id)
    {
        $country = Country::findOrFail($id);
        $s3 = Storage::disk('s3');
        //delete previous thumbnail
        $previous_image_key = $country->image;
        $s3->delete($previous_image_key);
        
        $country_image_file = $request->file('image');
        $extension = $country_image_file->extension();
        $filename = md5(time()) . '_' . $country_image_file->getClientOriginalName();

        $orientation = Image::make($country_image_file)->exif('Orientation');

        $resized_file = Image::make($country_image_file)->rotate($orientation === 8 ? 90 : 0)->resize(1200, null, function ($constraint) {
            $constraint->aspectRatio();
        })->encode($extension);
        $file_key = 'country-thumbnails/' . $filename;

        $s3->put($file_key, (string)$resized_file, 'public');

        $country->image = $file_key;

        $country->save();
    }

    public function destroy($id)
    {
        $s3 = Storage::disk('s3');
        $country = Country::findOrFail($id);
        $country_thumbnail_key = $country->image;
        $s3->delete($country_thumbnail_key);
        Country::destroy($id);
    }
}
