<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use app\Models\Ads;

class AdsSeeder extends Seeder
{
    public function run()
    {
        $ads = new Ads();
        $ads->name = 'Admin';
        $ads->slug = 'admin';
        $ads->save();
    }
}
