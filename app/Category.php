<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    protected $fillable = [
        'name'
    ];


    public function posts()
    {
        return $this->belongsToMany('App\Post');
    }

    public function photos()
    {
        return $this->belongsToMany('App\Photo','category_photo');
    }

    public function videos()
    {
        return $this->belongsToMany('App\Video','category_video');
    }
}
