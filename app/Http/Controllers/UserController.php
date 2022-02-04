<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Http\Resources\UserResource;


class UserController extends Controller
{
    public function getUser(Request $request)
    {
        $user    =   User::get();

        if( $user == null)
        {
           return response()->json ( "User nor found!", 404 );
        }

        return response()->json( UserResource::collection($user) , 200 );
    }
}


