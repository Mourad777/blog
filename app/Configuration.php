<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Configuration extends Model
{
    //
    protected $fillable = [
        'video_gallery_order',
        'photo_gallery_order',
    ];
}
