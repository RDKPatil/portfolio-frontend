<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $skills = [
            ['name' => 'Laravel', 'category' => 'Frameworks', 'proficiency_level' => 90, 'order' => 1],
            ['name' => 'React', 'category' => 'Frameworks', 'proficiency_level' => 85, 'order' => 2],
            ['name' => 'Next.js', 'category' => 'Frameworks', 'proficiency_level' => 80, 'order' => 3],
            ['name' => 'PHP', 'category' => 'Languages', 'proficiency_level' => 90, 'order' => 1],
            ['name' => 'JavaScript', 'category' => 'Languages', 'proficiency_level' => 85, 'order' => 2],
            ['name' => 'TypeScript', 'category' => 'Languages', 'proficiency_level' => 80, 'order' => 3],
            ['name' => 'MySQL', 'category' => 'Tools & Platforms', 'proficiency_level' => 85, 'order' => 1],
            ['name' => 'Git', 'category' => 'Tools & Platforms', 'proficiency_level' => 90, 'order' => 2],
        ];

        foreach ($skills as $skill) {
            \App\Models\Skill::create($skill);
        }
    }
}
