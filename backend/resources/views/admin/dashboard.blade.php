@extends('admin.layout')

@section('content')
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p class="text-gray-500 mt-1">Overview of your portfolio activity.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Stats Card -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Projects</h3>
            <p class="mt-2 text-3xl font-bold text-gray-900">{{ \App\Models\Project::count() }}</p>
        </div>

        <!-- Stats Card -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider">Blog Posts</h3>
            <p class="mt-2 text-3xl font-bold text-gray-900">{{ \App\Models\Post::count() }}</p>
        </div>

        <!-- Quick Action -->
        <div class="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 text-white">
            <h3 class="text-sm font-medium text-gray-400 uppercase tracking-wider">Quick Action</h3>
            <div class="mt-4 space-y-2">
                <a href="{{ route('projects.create') }}"
                    class="block px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-center transition-colors">
                    + New Project
                </a>
                <a href="#"
                    class="block px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-center transition-colors">
                    + New Post
                </a>
            </div>
        </div>
    </div>
@endsection