<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    //
    protected $fillable = [
        'title',
        'videographer',
        'url',
        'description',
        'country',
        'tags',
    ];

    public function categories()
    {
        return $this->belongsToMany('App\Category','category_video');
    }
}
