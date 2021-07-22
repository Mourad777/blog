<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Post;
use Intervention\Image\Facades\Image;
use Storage;

class PostsController extends Controller
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

        $posts = Post::all();

        $posts->map(function ($post) {
            if ($post->image) {
                $post->image = Storage::disk(name: 's3')->url($post->image);
            }
            Log::info('counting comments for each post' . count($post->comments));
            $post->categories = $post->categories()->get();
            $post->comments = $post->comments()->get();
            $post->comment_count = getCommentCount($post->comments);

            return $post;
        });

        return $posts;
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
        // permanently delete
        // dd($request);
        
        $post = new Post;

        if ($request->has('image')) {
            $image = $request->file('image');
            $extension = $request->file('image')->extension();
            $filename = md5(time()) . '_' . $image->getClientOriginalName();
            $orientation = Image::make($image)->exif('Orientation');

            $resized_file = Image::make($image)->rotate($orientation === 8 ? 90 : 0)->resize(800, null, function ($constraint) {
                $constraint->aspectRatio();
            })->encode($extension);
            // $resized_file = Image::make($image)->resize(800, null, function ($constraint) {
            //     $constraint->aspectRatio();
            // })->encode($extension);
            $file_key = 'post-thumbnails/' . $filename;
            $s3 = Storage::disk('s3');
            $s3->put($file_key, (string)$resized_file, 'public');




            // $image_base_url = $request->file(key: 'image')->store(path: 'images', options: 's3');

            // Storage::disk(name: 's3')->setVisibility($image_base_url, visibility: 'public');
            // return Storage::disk(name:'s3')->url($image_base_url);
            // return Storage::cloud()->url($image_base_url);
            $post->image = $file_key;
        }

        $post->title = $request->title;
        if (!$request->title) {
            $post->title = 'Untitled';
        }
        Log::info('author creating post'.$request->author);
        $post->author = $request->author;
        $post->summary = $request->summary;
        $post->content = $request->content;
        $post->country = $request->country;
        $post->tags = $request->tags;
        $post->is_published = $request->is_published;
        $post->save();
        $post->categories()->attach(json_decode($request->selected_categories));
        // $post->create($request->all());
        // $post->title = $request->title;
        // $post->content = $request->content;



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
        $post = Post::find($id);
        $post->image = Storage::disk(name: 's3')->url($post->image);
        return $post;
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

        $post = Post::find($id);

        if ($post->image) {
            $post->aws_url = Storage::disk(name: 's3')->url($post->image);
        }
        $post->categories = $post->categories()->get();
        return $post;
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
        $post = Post::find($id);
        $post->title = $request->title;
        $post->content = $request->content;

        $post->tags = $request->tags;
        $post->is_published = $request->is_published;

        $post->author = $request->author;
        $post->summary = $request->summary;

        $post->country = $request->country;


        if ($request->image === 'sameImage') {
            //same image
            Log::info('same image');
        } else {
            if ($request->has('image')) {

                if ($post->image) {
                    //delete previous image
                }
                $image = $request->file('image');
                $extension = $request->file('image')->extension();
                $filename = md5(time()) . '_' . $image->getClientOriginalName();
                // $resized_file = Image::make($image)->resize(800, null, function ($constraint) {
                //     $constraint->aspectRatio();
                // })->encode($extension);

                $orientation = Image::make($image)->exif('Orientation');

                $resized_file = Image::make($image)->rotate($orientation === 8 ? 90 : 0)->resize(800, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->encode($extension);
                $file_key = 'post-thumbnails/' . $filename;
                $s3 = Storage::disk('s3');
                $s3->put($file_key, (string)$resized_file, 'public');



                // $image_base_url = $request->file(key: 'image')->store(path: 'images', options: 's3');

                // Storage::disk(name: 's3')->setVisibility($image_base_url, visibility: 'public');

                $post->image = $file_key;
            } else {
                $post->image = null;

                if ($post->image) {
                    //delete thumbnail from aws if there was an image on the post prior to updating
                    Log::info('delete thumbnail from aws');
                }
            }
        }

        $post->save();
        $post->categories()->sync(json_decode($request->selected_categories));
        //
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
        Post::destroy($id);
    }
}
