<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //

    public function login(Request $request)
    {
        //
        
        // Log::info('email' . $request['email']);
        // Log::info('password' . $request['password']);

        //check if email exists
        $user = User::where('email', $request['email'])->first();



        if (!$user || !Hash::check($request['password'], $user->password)) {
            return response([
                'message' => 'bad credentials', 401
            ], 401);
        }
        
        return response($user, 201);
        $token = $user->createToken('myapptoken')->plainTextToken;
        // return response($token, 201);
        // $response = [
        //     'user' => $user, 'token' => $token,
        // ];
        // return response($response, 201);
    }

    public function register(Request $request)
    {
        //
        Log::info('email' . $request['email']);
        Log::info('password' . $request['password']);

        $new_user = User::create([
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);
        // $token = $request->user()->createToken($request->token_name);
        $token = $new_user->createToken('blogapptoken')->plainTextToken;

        $response = [
            'user' => $new_user, 'token' => $token,
        ];

        return response($response, 201);
    }

    public function logout(Request $request)
    {
        //
        Log::info('logging out');
        auth()->user()->tokens()->delete();

        return ['message'=>'logged out'];
    }
}
