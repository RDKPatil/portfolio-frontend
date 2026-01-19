<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Project::truncate();

        $projects = [
            [
                'slug' => 'digital-onboarding-sales-system',
                'title' => 'Digital Onboarding & Sales System',
                'category' => 'Full Stack Development',
                'summary' => 'End-to-end business transformation through custom ERP and CRM integration.',
                'problem' => 'ACwO faced manual, paper-heavy processes for client onboarding and sales tracking, leading to inefficiencies and delayed reporting.',
                'approach' => 'I designed and built a full-stack application integrating the existing ERP system with Shopify APIs for real-time inventory sync, automated invoicing, and a streamlined sales workflow.',
                'solution' => 'Delivered a Laravel-based platform with a React dashboard for sales teams, MySQL backend for custom reporting, and automated email confirmations with invoice generation.',
                'impact' => 'Reduced onboarding time from 3 days to under 2 hours. Enabled centralized sales tracking and improved forecast accuracy by 40%.',
                'tech_stack' => ['Laravel', 'React', 'MySQL', 'REST APIs', 'Shopify API'],
                'featured' => true,
                'github_link' => null,
                'demo_link' => null,
            ],
            [
                'slug' => 'erp-automation-analytics',
                'title' => 'ERP Automation & BI Dashboards',
                'category' => 'Automation & Data Engineering',
                'summary' => 'Streamlined internal workflows and built real-time Power BI dashboards for decision-making.',
                'problem' => 'Mobilla\'s operations team relied on manual Excel exports and lacked visibility into production metrics, causing delays in decision-making.',
                'approach' => 'I architected an automated data pipeline connecting the ERP system to Power BI and built internal APIs to expose real-time operational data.',
                'solution' => 'Implemented scheduled Laravel jobs for data extraction, transformation, and loading (ETL) into a MySQL data warehouse. Created interactive dashboards for sales, inventory, and production KPIs.',
                'impact' => 'Eliminated 15+ hours/week of manual reporting. Enabled leadership to make data-driven decisions with live dashboards refreshed every 30 minutes.',
                'tech_stack' => ['Laravel', 'Power BI', 'MySQL', 'REST APIs', 'ETL Pipelines'],
                'featured' => true,
                'github_link' => null,
                'demo_link' => null,
            ],
            [
                'slug' => 'lead-gen-3d-platform',
                'title' => '3D Lead Generation Platform',
                'category' => 'Web Development',
                'summary' => 'Interactive 3D configurator for real estate lead capture and client engagement.',
                'problem' => 'Tritorc needed a unique way to capture high-quality leads for their architectural services while showcasing 3D models of projects.',
                'approach' => 'I built a custom web application with an embedded 3D viewer (Three.js integration) and lead capture forms, deployed on a scalable Node.js backend.',
                'solution' => 'Developed a responsive platform where users could explore interactive 3D models, configure options, and submit inquiries. Integrated with CRM for automated follow-ups.',
                'impact' => 'Generated 200+ qualified leads in the first quarter. Increased client engagement time by 300% compared to static portfolios.',
                'tech_stack' => ['Node.js', 'Three.js', 'MongoDB', 'Express', 'HTML/CSS'],
                'featured' => false,
                'github_link' => null,
                'demo_link' => null,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
