<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'image',
        'excerpt',
        'content',
        'published_at',
        'is_published',
        'meta_title',
        'meta_description',
        'meta_keywords',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'is_published' => 'boolean',
    ];

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        // Since 'image' now stores external URLs directly, just return it
        return $this->image;
    }

    public function comments()
    {
        return $this->hasMany(Comment::class)->latest();
    }
}
