<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Configuration;
use App\Events\BlogUpdated;
use Illuminate\Support\Facades\Log;

class ConfigurationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $config = Configuration::first();
        if ($config) {
            return $config;
        } else {
            return 'no_config';
        }

        // $config = new Configuration;

        // $config->photo_gallery_order = [1,2];

        // // if (User::where('email', '=', Input::get('email'))->exists()) {
        // //     // user found
        // //  }
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
    public function update(Request $request)
    {
        $config = Configuration::first();
        if (!$config) {
            $config = new Configuration;
        }
        if ($request->has('photo_gallery_order')) {
            $config->photo_gallery_order = $request->photo_gallery_order;
            $config->save();
            $message = 'The configuration was updated';
            event(new BlogUpdated($message));
            return 'photo gallery order updated';
        } else if ($request->has('video_gallery_order')) {
            $config->video_gallery_order = $request->video_gallery_order;
            $config->save();
            $message = 'The configuration was updated';
            event(new BlogUpdated($message));
            return 'video gallery order updated';
        } else {
            if($request->has('is_messages_allowed')){
                $config->is_messages_allowed = $request['is_messages_allowed'];
            }
            if($request->has('is_comments_approval_required')){
                $config->is_comments_approval_required = $request['is_comments_approval_required'];
            }
            $config->save();
            $message = 'The configuration was updated';
            event(new BlogUpdated($message));
            return 'Settings updated';
        }
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
