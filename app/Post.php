<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Comment;

class Post extends Model
{
    //

    protected $fillable = [
        'title',
        'author',
        'is_published',
        'summary',
        'country',
        'tags',
        'content',
        'image',
    ];

    protected $casts = [
        // 'tags' => 'array',
        'is_published' => 'boolean',
    ];

    // public function comments() {

    //     return $this->hasMany('App\Comment');
    // }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable')->whereNull('parent_id');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Category');
    }

}
