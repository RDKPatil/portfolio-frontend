<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactInfo extends Model
{
    protected $fillable = ['email', 'phone', 'linkedin', 'github', 'other_links'];

    protected $casts = [
        'other_links' => 'array',
    ];
}
