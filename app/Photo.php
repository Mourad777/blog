<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    //
    protected $fillable = [
        'title',
        'photographer',
        'url',
        'description',
        'camera',
        'lens',
        'focal_length',
        'aperture',
        'shutter_speed',
        'iso',
        'date_taken',
        'country',
        'tags'
    ];

    public function categories()
    {
        return $this->belongsToMany('App\Category','category_photo');
    }

}
