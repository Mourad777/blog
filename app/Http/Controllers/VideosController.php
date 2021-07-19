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

        function  increaseCommentCount($comments)
        {
            global $comment_count;

            if ($comments) {
                $comment_count += count($comments);
                Log::info('yes comments new count' . $comment_count);
            }

            foreach ($comments as $comment) {
                if ($comment->replies) {
                    increaseCommentCount($comment->replies);
                }
            }
            Log::info('done' . $comment_count);
            return $comment_count;
        }

        function getCommentCount($comments)
        {
            global $comment_count;

            $comment_count = 0;

            $final_value = increaseCommentCount($comments);

            return $final_value;
        }

        //
        $videos = Video::all();

        $videos->map(function ($video) {
            $video->src = Storage::disk(name: 's3')->url($video->url);
            if ($video->thumbnail) {
                $video->thumbnail = Storage::disk(name: 's3')->url($video->thumbnail);
            }
            $video->categories = $video->categories()->get();

            $video->comments = $video->comments()->get();
            $video->comment_count = getCommentCount($video->comments);
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
        Log::info(' video store controller');
        $video = new Video;
        if ($request->has('video')) {
            Log::info('has video ');
            $video_file = $request->file('video');
            $filename = md5(time()) . '_' . $video_file->getClientOriginalName();
            $file_key = 'videos/' . $filename;


            // $video_base_url = $request->file(key: 'video')->store(path: 'videos', options: 's3');
            Log::info('storing video');
            // Storage::disk(name: 's3')->setVisibility($file_key, visibility: 'public');
          
            $video->url = $file_key;

            Storage::disk('s3')->put($file_key, file_get_contents($video_file), 'public');

            Log::info('stored video');
            $video->save();
            // $video->src = Storage::disk(name: 's3')->url($video_base_url);



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
