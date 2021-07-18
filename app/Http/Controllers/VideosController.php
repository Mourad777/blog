<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Video;
use Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Log;

class VideosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $videos = Video::all();

        $videos->map(function ($video) {
            $video->src = Storage::disk(name: 's3')->url($video->url);
            if ($video->thumbnail) {
                $video->thumbnail = Storage::disk(name: 's3')->url($video->thumbnail);
            }
            $video->categories = $video->categories()->get();
            return $video;
        });

        return $videos;
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
        $video = new Video;
        if ($request->has('video')) {
            $video_base_url = $request->file(key: 'video')->store(path: 'videos', options: 's3');
            Storage::disk(name: 's3')->setVisibility($video_base_url, visibility: 'public');
            $video->url = $video_base_url;
            $video->save();
            $video->src = Storage::disk(name: 's3')->url($video_base_url);
            return $video;
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
        $video = Video::find($id);
        $video->src = Storage::disk(name: 's3')->url($video->url);
        return $video;
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
        $video = Video::find($id);
        $video->title = $request->title;
        $video->description = $request->description;
        $video->tags = $request->tags;
        $video->country = $request->country;


        Log::info(' thumbnail'.$request->thumbnail);

        if ($request->thumbnail === 'sameThumbnail') {
            //same image
            Log::info('same thumbnail');
        } else {
            if ($request->has('thumbnail')) {

                if ($video->thumbnail) {
                    //delete previous image
                }
                $thumbnail = $request->file('thumbnail');
                $extension = $request->file('thumbnail')->extension();
                $filename = md5(time()) . '_' . $thumbnail->getClientOriginalName();
                
                $orientation = Image::make($thumbnail)->exif('Orientation');

                $resized_file = Image::make($thumbnail)->rotate($orientation === 8 ? 90 : 0)->resize(800, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->encode($extension);
                $file_key = 'video-thumbnails/' . $filename;
                $s3 = Storage::disk('s3');
                $s3->put($file_key, (string)$resized_file, 'public');



                // $image_base_url = $request->file(key: 'image')->store(path: 'images', options: 's3');

                // Storage::disk(name: 's3')->setVisibility($image_base_url, visibility: 'public');

                $video->thumbnail = $file_key;
            } else {
                $video->thumbnail = null;

                if ($video->thumbnail) {
                    //delete thumbnail from aws if there was an image on the post prior to updating
                    Log::info('delete thumbnail from aws');
                }
            }
        }











        $video->save();
        $video->categories()->sync(json_decode($request->selected_categories));


        return $video;
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
        Video::destroy($id);
    }
}
