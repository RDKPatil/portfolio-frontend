<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Post::create([
            'title' => 'Getting Started with Laravel',
            'slug' => 'getting-started-laravel',
            'excerpt' => 'A beginner\'s guide to Laravel framework.',
            'content' => 'Laravel is a powerful PHP framework...',
            'published_at' => now(),
            'is_published' => true
        ]);
    }
}
