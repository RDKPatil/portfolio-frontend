@extends('admin.layout')

@section('content')
    <div class="mb-8 flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">New Project</h1>
        <a href="{{ route('projects.index') }}" class="text-gray-500 hover:text-gray-900">
            &larr; Back to Projects
        </a>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl">
        <form action="{{ route('projects.store') }}" method="POST">
            @csrf
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="space-y-1">
                    <label for="title" class="block text-sm font-medium text-gray-700">Project Title</label>
                    <input type="text" name="title" id="title"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"
                        required>
                </div>

                <div class="space-y-1">
                    <label for="slug" class="block text-sm font-medium text-gray-700">Slug (URL)</label>
                    <input type="text" name="slug" id="slug"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"
                        required>
                </div>

                <div class="space-y-1">
                    <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                    <input type="text" name="category" id="category"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"
                        placeholder="e.g. Full Stack" required>
                </div>

                <div class="space-y-1">
                    <label for="tech_stack" class="block text-sm font-medium text-gray-700">Tech Stack (Comma
                        separated)</label>
                    <input type="text" name="tech_stack" id="tech_stack"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"
                        placeholder="Laravel, React, Tailwind">
                </div>
            </div>

            <div class="space-y-4 mb-6">
                <div class="space-y-1">
                    <label for="summary" class="block text-sm font-medium text-gray-700">Summary</label>
                    <textarea name="summary" id="summary" rows="3"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"
                        required></textarea>
                </div>

                <div class="space-y-1">
                    <label for="problem" class="block text-sm font-medium text-gray-700">The Problem</label>
                    <textarea name="problem" id="problem" rows="4"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"></textarea>
                </div>

                <div class="space-y-1">
                    <label for="approach" class="block text-sm font-medium text-gray-700">The Approach</label>
                    <textarea name="approach" id="approach" rows="4"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"></textarea>
                </div>

                <div class="space-y-1">
                    <label for="solution" class="block text-sm font-medium text-gray-700">The Solution</label>
                    <textarea name="solution" id="solution" rows="4"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"></textarea>
                </div>

                <div class="space-y-1">
                    <label for="impact" class="block text-sm font-medium text-gray-700">Key Impact</label>
                    <textarea name="impact" id="impact" rows="3"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm p-2 border"></textarea>
                </div>

                <div class="flex items-center">
                    <input type="checkbox" name="featured" id="featured" value="1"
                        class="h-4 w-4 text-slate-600 focus:ring-slate-500 border-gray-300 rounded">
                    <label for="featured" class="ml-2 block text-sm text-gray-900">
                        Feature this project on homepage
                    </label>
                </div>
            </div>

            <div class="flex justify-end pt-5 border-t border-gray-100">
                <button type="submit"
                    class="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                    Save Project
                </button>
            </div>
        </form>
    </div>
@endsection