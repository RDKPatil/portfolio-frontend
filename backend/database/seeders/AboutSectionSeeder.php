<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\AboutSection::create([
            'section_type' => 'experience',
            'title' => 'Senior Software Engineer',
            'company' => 'Tech Company',
            'duration' => '2020 - Present',
            'description' => 'Led development of scalable web applications using Laravel and React.',
            'order' => 1
        ]);
    }
}
