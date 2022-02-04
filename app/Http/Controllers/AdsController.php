<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\AdsResource;
use App\Models\Ads;

class AdsController extends Controller
{

    public function adsPost(Request $request)
    {
        $ads    =   new Ads;

        $ads->user_id       =       $request->user_id;
        $ads->name          =       $request->name;
        $ads->info          =       $request->info;
        $ads->phone         =       $request->phone;
        $ads->email         =       $request->email;
        $ads->image         ??      null;      
        $ads->diplom        ??      null;

        $ads->save();

        return response()->json( $ads, 200);
    }

}
