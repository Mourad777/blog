<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
use App\Events\CommentsUpdated;
use App\Post;
use App\Video;
use App\Configuration;
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
        $config = Configuration::first();

        function getReplies($comm, $config)
        {
            $comm_replies = $comm->replies()->get();
            if ($comm_replies) {
                $comm_replies->map(function ($comment) use ($config) {
                    $comment->encryptedEmail = md5($comment->email);
                    $comment->replies = getReplies($comment, $config);
                    $is_comments_approval_required = null;
                    if ($config) {
                        if ($config->is_comments_approval_required) {
                            $is_comments_approval_required = true;
                        }
                    }

                    if ((!$config && !auth()->user() && $comment->is_approved === 0) || ($is_comments_approval_required && !auth()->user() && $comment->is_approved === 0)) {
                        return null;
                    } else {
                        return $comment;
                    }
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
        $comments->map(function ($comment) use ($config) {
            $comment->replies = getReplies($comment, $config);
            $comment->encryptedEmail = md5($comment->email);

            $is_comments_approval_required = null;
            if ($config) {
                if ($config->is_comments_approval_required) {
                    $is_comments_approval_required = true;
                }
            }
            if ((!$config && !auth()->user() && $comment->is_approved === 0) || ($is_comments_approval_required && !auth()->user() && $comment->is_approved === 0)) {
                return $comment->content = '';
            } else {
                return $comment;
            }
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
        $post = Post::find($request->get('post_id'));
        $video = Video::find($request->get('video_id'));

        if ($request->comment_type === 'post' && !$post->is_comments_enabled) {
            $response = [
                'message' => 'comments disabled',
            ];

            return response($response, 201);
        }
        if ($request->comment_type === 'video' && !$video->is_comments_enabled) {
            $response = [
                'message' => 'comments disabled',
            ];

            return response($response, 201);
        }

        $fields = $request->validate([
            'name' => 'required',
            'email' => 'email',
            'content' => 'required'
        ]);

        if ($request->comment_id) {
            //if the request has a comment_id then the user
            //wants to reply to a comment
            $reply = new Comment();
            $reply->content = $fields['content'];
            $reply->user = $fields['name'];
            $reply->email = $fields['email'];
            $reply->is_approved = 0;
            // $reply->user()->associate($request->user());
            $reply->parent_id = $request->get('comment_id');
            if ($request->comment_type === 'post') {
                $post->comments()->save($reply);
            }
            if ($request->comment_type === 'video') {
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

                $post->comments()->save($comment);
            }
            if ($request->comment_type === 'video') {
                $video->comments()->save($comment);
            }
        }
        $message = 'A comment was posted: ' . $request->content;
        event(new CommentsUpdated($message));
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
        // $comment = Comment::find($id);

        // $comment->is_approved = !$comment->is_approved;
        // $comment->save();

    }

    public function approve_comment(Request $request)
    {

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

        if ($is_approved === 1) {
            $message = 'A comment was approved: ' . $comment->content;
            event(new CommentsUpdated($message));
        } else {
            $message = 'A comment was unapproved: ' . $comment->content;
            event(new CommentsUpdated($message));
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
        // function  increaseCommentCount($comments)
        // {
        //     global $comment_count;

        //     if ($comments) {
        //         $comment_count += count($comments);
        //     }

        //     foreach ($comments as $comment) {
        //         if ($comment->replies) {
        //             increaseCommentCount($comment->replies);
        //         }
        //     }
        //     return $comment_count;
        // }


        $a = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        $t = &$a; //Copy
        foreach ($t as $b) {
            echo " $b ";
            if ($b == 5)
                $t[] = 11;
        }


        $comment = Comment::find($id);
        $childrenCommentIds = array();
        function getCommentChildren($selectedComment)
        {
            global $childrenCommentIds;
            foreach ($selectedComment->replies as $reply) {

                // array_push($childrenCommentIds, $reply->id);
                Log::info('push' . $reply->id);
                // $childrenCommentIds[] = $reply->id;
                $childrenCommentIds[] = strval($reply->id);

                Log::info('json encode' . json_encode($childrenCommentIds));
                Log::info(print_r($childrenCommentIds));
                if ($reply->replies) {

                    getCommentChildren($reply);
                }
            }
            return $childrenCommentIds;
        }

        $commentIds = getCommentChildren($comment);
        // Log::info(print_r($childrenCommentIds));
        Log::info($childrenCommentIds);
        Log::info('json encode commentIds-----------------------' . json_encode($commentIds));

        Log::info(print_r($commentIds));
        Log::info('ids comments');

        Log::info(print_r($commentIds));
        $commentIds[] = $id;
        Log::info('json encode commentIds finalized-----------------------' . json_encode($commentIds));
        // Comment::whereIn('id', explode(",", $commentIds))->delete();
        Comment::whereIn('id', $commentIds)->delete(); 
        // Comment::find($commentIds)->delete();

        $message = 'A comment was deleted: ' . $comment->content;
        event(new CommentsUpdated($message));
    }
}
