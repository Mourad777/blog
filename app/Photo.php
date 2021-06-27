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
        'aperture',
        'shutter',
        'iso',
        'country',
        'tags'
    ];

    public function categories()
    {
        return $this->belongsToMany('App\Category','category_photo');
    }

}
