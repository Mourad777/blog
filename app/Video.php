<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    //
    protected $fillable = [
        'title',
        'thumbnail',
        'videographer',
        'url',
        'description',
        'country',
        'tags',
        'is_comments_enabled',
    ];

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable')->whereNull('parent_id');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Category','category_video');
    }
}
