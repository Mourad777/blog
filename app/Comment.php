<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    //
    protected $fillable = [
        'content',
        'user',
        'email'
    ];

    public function replies()
    {
        return $this->hasMany(Comment::class, 'parent_id');
    }
}
