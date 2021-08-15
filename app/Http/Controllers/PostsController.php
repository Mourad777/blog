<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Post;
use Intervention\Image\Facades\Image;
use Storage;
use App\Events\BlogUpdated;

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

        $posts = Post::all();

        $posts->map(function ($post) {
            if ($post->image) {
                $post->image = Storage::disk(name: 's3')->url($post->image);
            }
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
            })->encode('webp', 90);
            $file_key = 'post-thumbnails/' . $filename . '.webp';
            $s3 = Storage::disk('s3');
            $s3->put($file_key, (string)$resized_file, 'public');
            $post->image = $file_key;
        }

        $post->title = $request->title;
        if (!$request->title) {
            $post->title = 'Untitled';
        }
        $post->author = $request->author;
        $post->date_written = $request->date_written;
        $post->summary = $request->summary;
        $post->content = $request->content;
        $post->country = $request->country;
        $post->tags = $request->tags;
        $post->is_published = $request->is_published;
        $post->is_comments_enabled = $request->is_comments_enabled;
        $post->save();
        $post->categories()->attach(json_decode($request->selected_categories));
        $message = 'The post ' . $post->title . ' was created';
        event(new BlogUpdated($message));
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
        $post->image = $post->image ? Storage::disk(name: 's3')->url($post->image) : '';
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
        $s3 = Storage::disk('s3');
        $post = Post::find($id);
        $post->title = $request->title;
        $post->content = $request->content;
        $post->tags = $request->tags;
        $post->is_published = $request->is_published;
        $post->is_comments_enabled = $request->is_comments_enabled;
        $post->author = $request->author;
        $post->summary = $request->summary;
        $post->country = $request->country;
        $post->date_written = $request->date_written;

        if ($request->image === 'sameImage') {
            //same image
        } else {
            if ($request->has('image')) {

                $s3->delete($post->image);
                //delete previous image

                $image = $request->file('image');
                $extension = $request->file('image')->extension();
                $filename = md5(time()) . '_' . $image->getClientOriginalName();

                $orientation = Image::make($image)->exif('Orientation');

                $resized_file = Image::make($image)->rotate($orientation === 8 ? 90 : 0)->resize(800, null, function ($constraint) {
                    $constraint->aspectRatio();
                })->encode('webp', 90);
                $file_key = 'post-thumbnails/' . $filename . '.webp';
                $s3->put($file_key, (string)$resized_file, 'public');

                $post->image = $file_key;
            } else {
                $s3->delete($post->image);
                $post->image = null;
                //delete thumbnail from aws if there was an image on the post prior to updating
            }
        }

        $post->save();
        $post->categories()->sync(json_decode($request->selected_categories));

        $message = 'The post ' . $request->title . ' was updated';
        event(new BlogUpdated($message));
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
        $post = Post::findOrFail($id);
        $post->categories()->detach();
        $s3 = Storage::disk('s3');
        $s3->delete($post->image);
        Post::destroy($id);
        $message = 'The post ' . $post->title . ' was deleted';
        event(new BlogUpdated($message));
    }
}
