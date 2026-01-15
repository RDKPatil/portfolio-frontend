@extends('admin.layout')

@section('content')
    <div class="flex justify-between items-center mb-8">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Blog Posts</h1>
            <p class="text-gray-500 mt-1">Manage your blog articles and insights.</p>
        </div>
        <a href="{{ route('posts.create') }}"
            class="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
            + New Post
        </a>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Image</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Title</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Published</th>
                    <th class="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                @foreach($posts as $post)
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4">
                            @if($post->image)
                                <img src="{{ asset('storage/' . $post->image) }}" alt="" class="h-10 w-16 object-cover rounded">
                            @else
                                <div class="h-10 w-16 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs">No Img</div>
                            @endif
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm font-medium text-gray-900">{{ $post->title }}</div>
                            <div class="text-sm text-gray-500">/{{ $post->slug }}</div>
                        </td>
                        <td class="px-6 py-4">
                            @if($post->is_published)
                                <span
                                    class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">Published</span>
                            @else
                                <span
                                    class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100">Draft</span>
                            @endif
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            {{ $post->published_at ? $post->published_at->format('M d, Y') : '-' }}
                        </td>
                        <td class="px-6 py-4 text-right text-sm">
                            <a href="{{ route('posts.edit', $post) }}" class="text-slate-600 hover:text-slate-900 mr-4">Edit</a>
                            <form action="{{ route('posts.destroy', $post) }}" method="POST" class="inline-block"
                                onsubmit="return confirm('Delete this post?');">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="text-red-600 hover:text-red-900">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        @if($posts->isEmpty())
            <div class="p-12 text-center text-gray-500">
                No posts yet. Create your first article!
            </div>
        @endif
    </div>
@endsection