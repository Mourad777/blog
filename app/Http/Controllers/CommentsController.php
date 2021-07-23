<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
use App\Post;
use App\Video;
use Illuminate\Support\Facades\Log;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($doc_type, $id)

    {
        function getReplies($comm)
        {
            $comm_replies = $comm->replies()->get();
            if ($comm_replies) {
                $comm_replies->map(function ($comment) {
                    $comment->encryptedEmail = md5($comment->email);
                    $comment->replies = getReplies($comment);
                    return $comment;
                });
            }
            return $comm_replies;
        }
        //
        if ($doc_type === 'post') {
            $comments = Post::find($id)->comments()->get();
        }
        if ($doc_type === 'video') {
            $comments = Video::find($id)->comments()->get();
        }
        $comments->map(function ($comment) {
            $comment->replies = getReplies($comment);
            $comment->encryptedEmail = md5($comment->email);
            return $comment;
        });

        return $comments;
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
        if ($request->comment_id) {
            //if the request has a comment_id then the user
            //wants to reply to a comment
            $reply = new Comment();
            $reply->content = $request->get('content');
            $reply->user = $request->get('name');
            $reply->email = $request->get('email');
            $reply->is_approved = 0;
            // $reply->user()->associate($request->user());
            $reply->parent_id = $request->get('comment_id');
            if ($request->comment_type === 'post') {
                $post = Post::find($request->get('post_id'));
                $post->comments()->save($reply);
            }
            if ($request->comment_type === 'video') {
                $video = Video::find($request->get('video_id'));
                $video->comments()->save($reply);
            }
        } else {
            $comment = new Comment;
            $comment->content = $request->get('content');
            $comment->user = $request->get('name');
            $comment->email = $request->get('email');
            $comment->is_approved = 0;
            // $comment->user()->associate($request->user());
            if ($request->comment_type === 'post') {
                $post = Post::find($request->get('post_id'));
                $post->comments()->save($comment);
            }
            if ($request->comment_type === 'video') {
                $video = Video::find($request->get('video_id'));
                $video->comments()->save($comment);
            }
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
        $comment = Comment::find($id);

        $comment->is_approved = !$comment->is_approved;
        $comment->save();
    }

    public function approve_comment(Request $request)
    {
        //
        $id = $request->comment_id;
        $comment = Comment::find($id);

        $is_approved = 0;
        if ($comment->is_approved === 0) {
            $is_approved = 1;
        } else {
            $is_approved = 0;
        }


        $comment->is_approved = $is_approved;
        $comment->save();
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
        $comment = Comment::find($id);

        $childrenCommentIds = array();
        function getCommentChildren($selectedComment)
        {
            global $childrenCommentIds;
            foreach ($selectedComment->replies as $reply) {
                // array_push($childrenCommentIds, $reply->id);
                $childrenCommentIds[] = $reply->id;
                if ($reply->replies) {
                    getCommentChildren($reply);
                }
            }
            return $childrenCommentIds;
        }

        $commentIds = getCommentChildren($comment);


        $commentIds[] = $id;

        Comment::find($commentIds)->delete();

    }
}
