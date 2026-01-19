<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Skill;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Skill::truncate();

        $skillCategories = [
            'Programming Languages' => ["Java", "Python", "PHP", "JavaScript", "TypeScript"],
            'Frameworks & Libraries' => ["Laravel", "React.js", "Node.js", "Flutter", "AngularJS", "Bootstrap", "JSP", "Servlets"],
            'Web & Cloud' => ["REST APIs", "HTML5/CSS3", "AWS (Basics)", "Shopify", "XML"],
            'Data & Reporting' => ["MySQL", "MongoDB", "Power BI", "JDBC"],
            'Leadership & Methodology' => ["Team Mentoring", "System Design", "Agile/Scrum", "Code Reviews", "Jira", "Technical Documentation"],
        ];

        $order = 1;
        foreach ($skillCategories as $category => $skills) {
            foreach ($skills as $skillName) {
                Skill::create([
                    'name' => $skillName,
                    'category' => $category,
                    'proficiency_level' => 80, // Default for now
                    'order' => $order++,
                ]);
            }
        }
    }
}
