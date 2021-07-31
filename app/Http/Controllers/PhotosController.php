<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Photo;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;
use Storage;

class PhotosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $photos = Photo::all();

        $photos->map(function ($photo) {
            $photo->src = Storage::disk(name: 's3')->url($photo->url);
            $photo->height = 1;
            $photo->width = 1.5;
            $photo->categories = $photo->categories()->get();
            return $photo;
        });

        return $photos;
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
        $photo = new Photo;
        if ($request->has('image')) {

            $image = $request->file('image');

            $extension = $request->file('image')->extension();
            $filename = md5(time()) . '_' . $image->getClientOriginalName();

            $orientation = Image::make($image)->exif('Orientation');

            $resized_file = Image::make($image)->rotate($orientation === 8 ? 90 : 0)->resize(800, null, function ($constraint) {
                $constraint->aspectRatio();
            })->encode('webp',90);
            // $image_orientated = $resized_file->orientate();

            $file_key = 'gallery/' . $filename . '.webp';
            $s3 = Storage::disk('s3');
            $s3->put($file_key, (string)$resized_file, 'public');

            $photo->url = $file_key;
            $photo->camera = $request->camera;
            $photo->lens = Str::limit($request->lens, 20);
            $photo->focal_length = Str::limit($request->focal_length, 20);
            $photo->shutter_speed = Str::limit($request->shutter_speed, 20);
            $photo->aperture = Str::limit($request->aperture, 20);
            $photo->iso = $request->iso;
            if ($request->has('date_taken') && $request->date_taken !== 'undefined') {
                $photo->date_taken = $request->date_taken;
            }
            $photo->save();
            $photo->src = Storage::disk(name: 's3')->url($file_key);
            return $photo;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $photo = Photo::find($id);
        $photo->src = Storage::disk(name: 's3')->url($photo->url);
        return $photo;
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
        $photo = Photo::find($id);

        $photo->title = $request->title;
        $photo->photographer = $request->photographer;
        $photo->description = $request->description;

        $photo->camera = $request->camera;
        $photo->lens = $request->lens;
        $photo->focal_length = $request->focal_length;
        $photo->shutter_speed = $request->shutter_speed;
        $photo->aperture = $request->aperture;
        $photo->iso = $request->iso;
        $photo->date_taken = $request->date_taken;

        $photo->tags = $request->tags;
        $photo->country = $request->country;
        $photo->save();
        $photo->categories()->sync(json_decode($request->selected_categories));


        return $photo;
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
        $post = Photo::findOrFail($id);
        $s3 = Storage::disk('s3');
        $key = $post->url;
        $s3->delete($key);
        Photo::destroy($id);
    }
}
