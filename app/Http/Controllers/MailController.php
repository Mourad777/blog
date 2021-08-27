<?php

namespace App\Http\Controllers;

use Mail;

class MailController extends Controller
{
    public function sendMail()
    {
        $data = [
            'name' => 'Mourad',
            'message' => 'hello',
        ];

        $sendMailStatus = Mail::send('mail', ['data' => $data], function ($message) use ($data) {
            $message->from('mourad777b@gmail.com', 'abc');
            $message->to('mourad777b@gmail.com')->subject('Your Subject');
        });

        // Mail::to('mourad777b@gmail.com', ["data" => $data])->send(new SendgridMail());
        dd('Mail sent');
    }
}
