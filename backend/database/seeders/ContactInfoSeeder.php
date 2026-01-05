<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\ContactInfo::create([
            'email' => 'admin@portfolio.com',
            'phone' => '+1234567890',
            'linkedin' => 'https://linkedin.com/in/yourprofile',
            'github' => 'https://github.com/yourusername',
        ]);
    }
}
