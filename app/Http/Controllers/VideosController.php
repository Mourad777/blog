<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Video;

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
        if ($request->has('image')) {
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
