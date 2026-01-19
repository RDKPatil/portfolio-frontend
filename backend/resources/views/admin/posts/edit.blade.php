@extends('admin.layout')

@section('content')
    <div class="mb-8 flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">Edit Post</h1>
        <a href="{{ route('posts.index') }}" class="text-gray-500 hover:text-gray-900">
            &larr; Back to Posts
        </a>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl">
        <form action="{{ route('posts.update', $post) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="space-y-6">
                {{-- Image Upload Section --}}
                <div>
                    <label for="image" class="block text-sm font-medium text-gray-700">Cover Image</label>
                    <div class="mt-2 flex items-center gap-6">
                        @if($post->image)
                            <div class="relative group">
                                <img src="{{ asset('storage/' . $post->image) }}" alt="Current Image"
                                    class="h-32 w-auto rounded-lg shadow-md border border-gray-200 object-cover">
                                <div class="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow">
                                    <span class="text-xs font-bold text-gray-500 px-1">Current</span>
                                </div>
                            </div>
                        @else
                            <div class="h-32 w-32 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                                No Image
                            </div>
                        @endif
                        
                        <div class="flex-1">
                            <input type="file" name="image" id="image" accept="image/*"
                                class="block w-full text-sm text-slate-500 
                                file:mr-4 file:py-2 file:px-4 
                                file:rounded-md file:border-0 
                                file:text-sm file:font-semibold 
                                file:bg-slate-900 file:text-white 
                                hover:file:bg-slate-700 transition-colors cursor-pointer">
                            <p class="mt-2 text-xs text-gray-500">Upload to replace the current image. Standard 16:9 ratio recommended.</p>
                        </div>
                    </div>
                </div>

                {{-- Basic Info --}}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">Post Title</label>
                        <input type="text" name="title" id="title" value="{{ old('title', $post->title) }}"
                            class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2.5 border"
                            required>
                    </div>
                    <div>
                        <label for="slug" class="block text-sm font-medium text-gray-700">URL Slug</label>
                        <input type="text" name="slug" id="slug" value="{{ old('slug', $post->slug) }}"
                            class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2.5 border"
                            required>
                    </div>
                </div>

                <div>
                    <label for="excerpt" class="block text-sm font-medium text-gray-700">Excerpt</label>
                    <textarea name="excerpt" id="excerpt" rows="2"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2.5 border">{{ old('excerpt', $post->excerpt) }}</textarea>
                </div>

                <div>
                    <label for="content" class="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <textarea name="content" id="content" rows="15"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2.5 border">{{ old('content', $post->content) }}</textarea>
                </div>

                {{-- Publishing --}}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div>
                        <label for="published_at" class="block text-sm font-medium text-gray-700">Publish Date</label>
                        <input type="datetime-local" name="published_at" id="published_at"
                            value="{{ old('published_at', $post->published_at ? $post->published_at->format('Y-m-d\TH:i') : '') }}"
                            class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2.5 border bg-white">
                    </div>
                    <div class="flex items-center pt-8">
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" name="is_published" id="is_published" value="1" {{ old('is_published', $post->is_published) ? 'checked' : '' }} class="sr-only peer">
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-900"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Publish Status</span>
                        </label>
                    </div>
                </div>

                {{-- SEO Metadata --}}
                <div class="border-t border-gray-200 pt-6">
                    <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        SEO Metadata
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label for="meta_title" class="block text-sm font-medium text-gray-700">Meta Title</label>
                            <input type="text" name="meta_title" id="meta_title" value="{{ old('meta_title', $post->meta_title) }}" placeholder="SEO Title (defaults to Post Title)"
                                class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2.5 border">
                        </div>
                        <div>
                            <label for="meta_description" class="block text-sm font-medium text-gray-700">Meta Description</label>
                            <textarea name="meta_description" id="meta_description" rows="2" placeholder="Brief summary for search engines"
                                class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2.5 border">{{ old('meta_description', $post->meta_description) }}</textarea>
                        </div>
                        <div>
                            <label for="meta_keywords" class="block text-sm font-medium text-gray-700">Meta Keywords</label>
                            <input type="text" name="meta_keywords" id="meta_keywords" value="{{ old('meta_keywords', $post->meta_keywords) }}" placeholder="keyword1, keyword2, keyword3"
                                class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2.5 border">
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 flex justify-end gap-3">
                 <a href="{{ route('posts.index') }}" class="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-100">
                    Cancel
                </a>
                <button type="submit"
                    class="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300">
                    Update Post
                </button>
            </div>
        </form>
    </div>

    <!-- TinyMCE -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.8.2/tinymce.min.js" referrerpolicy="origin"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            tinymce.init({
                selector: 'textarea#content',
                height: 600,
                menubar: false,
                statusbar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Inter,sans-serif; font-size:16px; line-height:1.6; color:#374151; }'
            });
        });
    </script>
@endsection