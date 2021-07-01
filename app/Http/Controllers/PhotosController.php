<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Photo;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Facades\Image;

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
            // $img = Image::make($request->image);
            // $resized_image = $img->resize(50, null, function ($constraint) {
            //     $constraint->aspectRatio();
            // });
            // $image_base_url = $resized_image->store(path: 'gallery', options: 's3');

            // Storage::disk('s3')->put('gallery', $resized_image)->setVisibility($image_base_url, visibility: 'public');

            //////////////////////////////////////////////////////////////////////////////////////////////
            $image = $request->file('image');
            $extension = $request->file('image')->extension();

            $filename = md5(time()) . '_' . $image->getClientOriginalName();

            $resized_file = Image::make($image)->resize(800, null, function ($constraint) {
                $constraint->aspectRatio();
            })->encode($extension);

            // //$path = '/users/'.Auth::user()->uuid.'/avatar/normal/'.$filename;

            // //dd($normal);
            $file_key = 'gallery/' . $filename;
            $s3 = Storage::disk('s3');
            $s3->put($file_key, (string)$resized_file, 'public');
            // $s3->setVisibility($file_key, visibility: 'public');

            /////////////////////////////////////////////////////////// ->stream();

            // $imageFile = $imageFile->__toString();

            // $filename = 'aUniqueFilename.png';

            // $s3 = Storage::disk('s3');
            // $s3->put($filename, $imageFile, 'public');
            ///////////////////////////////////////////////////////////////////////////////////////////
            // $image_base_url = $request->file(key: 'image')->store(path: 'gallery', options: 's3');
            // Storage::disk(name: 's3')->setVisibility($image_base_url, visibility: 'public');
            $photo->url = $file_key;
            $photo->camera = $request->camera;
            $photo->lens = $request->lens;
            $photo->focal_length = $request->focal_length;
            $photo->shutter_speed = $request->shutter_speed;
            $photo->aperture = $request->aperture;
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
        Log::info('photo 2' . $photo);
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
        Photo::destroy($id);
    }
}
