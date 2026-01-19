<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = ['name', 'category', 'proficiency_level', 'order'];

    protected $casts = [
        'proficiency_level' => 'integer',
        'order' => 'integer',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($skill) {
            if (!$skill->order) {
                $skill->order = static::max('order') + 1;
            }
        });

        static::addGlobalScope('order', function ($builder) {
            $builder->orderBy('order', 'asc');
        });
    }
}
