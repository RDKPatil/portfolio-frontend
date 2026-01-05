<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Project::create([
            'slug' => 'test-project',
            'title' => 'Test Project',
            'category' => 'Test Category',
            'summary' => 'This is a test project.',
            'problem' => 'Test Problem',
            'approach' => 'Test Approach',
            'solution' => 'Test Solution',
            'impact' => 'Test Impact',
            'tech_stack' => ['Laravel', 'Vue'],
            'featured' => true,
        ]);
    }
}
