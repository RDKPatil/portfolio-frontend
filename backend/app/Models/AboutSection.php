<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutSection extends Model
{
    protected $fillable = [
        'section_type',
        'title',
        'company',
        'duration',
        'description',
        'order'
    ];

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope('order', function ($builder) {
            $builder->orderBy('order', 'asc');
        });
    }
}
