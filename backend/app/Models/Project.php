<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'category',
        'summary',
        'problem',
        'approach',
        'solution',
        'impact',
        'tech_stack',
        'featured'
    ];

    protected $casts = [
        'tech_stack' => 'array',
        'featured' => 'boolean',
    ];
    //
}
