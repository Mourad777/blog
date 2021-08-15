<?php

namespace App\Http\Controllers;

use App\Events\MessagesUpdated;
use Illuminate\Http\Request;
use App\Message;
use App\Configuration;

class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $messages = Message::all();
        return $messages;
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

        $fields = $request->validate([
            'name' => 'required',
            'email' => 'email',
            'message' => 'required'
        ]);

        $message = new Message;
        $message->email = $fields['email'];
        $message->name = $fields['name'];
        $message->is_seen = 0;
        $message->message = $fields['message'];
        $config = Configuration::first();
        if (!$config || !!$config->is_messages_allowed) {
            //messages are allowed by default so if there is no
            //config table, messages should still be allowed to save
            $message->save();
            $message = 'A new message was recieved: ' . $message->message;
            event(new MessagesUpdated($message));
        } else {
            $response = [
                'Messages' => 'Messages are not allowed',
            ];

            return response($response, 201);
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
        $message = Message::findOrFail($id);
        return $message;
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
