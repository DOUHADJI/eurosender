<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login (Request $request) {

        $credentials = $request->validate([
            'email' =>  "required|email",
            'password' => 'required',
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return response()->json([
                "status" => "success",
                "message" => "connecté avec success",
                "user" => Auth::user()
            ]);
        }
 
        return response()->json([
            "status" => "error",
            "errors" => [
                "message" => "Oups! email or password incorrect",
               
            ]
        ]);



    }

    public function checkLogStatus()
    {
        if(Auth::check()) {
            return response()->json([
                "status" => "success",
                "data" =>[
                    "user" => Auth::user()
                ]
            ]);
        } else {
            return response()->json([
                "status" => "failed",
                "data" =>[
                    "message" => "user is not connected"
                ]
            ]);
        }
    }


    public function logout(Request $request)
    {
        //dd($request->user());

        Auth::logout();

       // $request->user()->tokens()->delete();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([
            "status" => "success",
            "data" => [
                "message" => "user disconnected successfully"
            ]
        ]);
    }
}
