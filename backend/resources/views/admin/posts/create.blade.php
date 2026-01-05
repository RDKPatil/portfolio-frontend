@extends('admin.layout')

@section('content')
    <div class="mb-8 flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">Create Blog Post</h1>
        <a href="{{ route('posts.index') }}" class="text-gray-500 hover:text-gray-900">
            &larr; Back to Posts
        </a>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl">
        <form action="{{ route('posts.store') }}" method="POST">
            @csrf
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">Post Title</label>
                        <input type="text" name="title" id="title"
                            class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                            required>
                    </div>
                    <div>
                        <label for="slug" class="block text-sm font-medium text-gray-700">URL Slug</label>
                        <input type="text" name="slug" id="slug"
                            class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                            required>
                    </div>
                </div>

                <div>
                    <label for="excerpt" class="block text-sm font-medium text-gray-700">Excerpt (optional)</label>
                    <textarea name="excerpt" id="excerpt" rows="2"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"></textarea>
                </div>

                <div>
                    <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
                    <textarea name="content" id="content" rows="10"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        required></textarea>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="published_at" class="block text-sm font-medium text-gray-700">Publish Date</label>
                        <input type="datetime-local" name="published_at" id="published_at"
                            class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border">
                    </div>
                    <div class="flex items-center pt-7">
                        <input type="checkbox" name="is_published" id="is_published" value="1"
                            class="h-4 w-4 text-slate-600 focus:ring-slate-500 border-gray-300 rounded">
                        <label for="is_published" class="ml-2 block text-sm text-gray-900">
                            Publish immediately
                        </label>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex justify-end">
                <button type="submit"
                    class="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800">
                    Save Post
                </button>
            </div>
        </form>
    </div>
@endsection