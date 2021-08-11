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
            }

            foreach ($comments as $comment) {
                if ($comment->replies) {
                    increaseCommentCount($comment->replies);
                }
            }
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
        $video = new Video;

        // $video_base_url = $request->file(key: 'video')->store(path: 'videos', options: 's3');
        // Storage::disk(name: 's3')->setVisibility($file_key, visibility: 'public');

        $video->url = $request->key;
        $video->is_comments_enabled = 1;

        // Storage::disk('s3')->put($file_key, file_get_contents($video_file), 'public');

        $video->save();
        $message = 'A video was uploaded: '.$video->url;
        event(new BlogUpdated($message));
        // $video->src = Storage::disk(name: 's3')->url($video_base_url);

        return $video;
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
        $video->thumbnail = $video->thumbnail ? Storage::disk(name: 's3')->url($video->thumbnail) : '';
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
        $s3 = Storage::disk('s3');
        $video = Video::find($id);
        $video->title = $request->title;
        $video->description = $request->description;
        $video->tags = $request->tags;
        $video->country = $request->country;
        $video->is_comments_enabled = $request->is_comments_enabled;

        if ($request->thumbnail === 'sameThumbnail') {
            //same image
        } else {
            if ($request->has('thumbnail')) {

                if ($video->thumbnail) {
                    //delete previous image to replace by new image
                    $key = $video->thumbnail;
                    $s3->delete($key);
                }
                $thumbnail_file = $request->file('thumbnail');
                $extension = $thumbnail_file->extension();
                $filename = md5(time()) . '_' . $thumbnail_file->getClientOriginalName();

                $orientation = Image::make($thumbnail_file)->exif('Orientation');

                $resized_file = Image::make($thumbnail_file)->rotate($orientation === 8 ? 90 : 0)->resize(800, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->encode($extension);
                $file_key = 'video-thumbnails/' . $filename;

                $s3->put($file_key, (string)$resized_file, 'public');

                $video->thumbnail = $file_key;
            } else {
                //delete thumbnail from aws if there was an image on the post prior to updating
                $key = $video->thumbnail;
                $s3->delete($key);
                $video->thumbnail = null;
            }
        }

        $video->save();
        $video->categories()->sync(json_decode($request->selected_categories));

        $message = 'A video was updated: '.$video->url;
        event(new BlogUpdated($message));
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
        $s3 = Storage::disk('s3');
        $video = Video::findOrFail($id);
        $video_thumbnail_key = $video->thumbnail;
        $video_url_key = $video->url;
        $s3->delete($video_thumbnail_key);
        $s3->delete($video_url_key);
        Video::destroy($id);
        $message = 'A video was deleted: '.$video->url;
        event(new BlogUpdated($message));
    }
}
