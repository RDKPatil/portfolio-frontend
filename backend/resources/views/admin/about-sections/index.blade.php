@extends('admin.layout')

@section('content')
    <div class="flex justify-between items-center mb-8">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">About / Experience</h1>
            <p class="text-gray-500 mt-1">Manage your work experience, education, and approach.</p>
        </div>
        <a href="{{ route('about-sections.create') }}"
            class="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
            + Add Section
        </a>
    </div>

    @foreach(['experience' => 'Work Experience', 'education' => 'Education', 'approach' => 'Approach'] as $type => $label)
        @if(isset($sections[$type]))
            <div class="mb-8">
                <h2 class="text-xl font-bold text-gray-700 mb-4">{{ $label }}</h2>
                <div class="space-y-4">
                    @foreach($sections[$type] as $section)
                        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div class="flex justify-between items-start">
                                <div class="flex-1">
                                    <h3 class="text-lg font-bold text-gray-900">{{ $section->title }}</h3>
                                    @if($section->company)
                                        <p class="text-sm text-gray-600 mt-1">{{ $section->company }}</p>
                                    @endif
                                    @if($section->duration)
                                        <p class="text-sm text-gray-500 mt-1">{{ $section->duration }}</p>
                                    @endif
                                    <p class="text-gray-700 mt-3">{{ $section->description }}</p>
                                    <p class="text-xs text-gray-400 mt-2">Order: {{ $section->order }}</p>
                                </div>
                                <div class="flex gap-2 ml-4">
                                    <a href="{{ route('about-sections.edit', $section) }}"
                                        class="text-slate-600 hover:text-slate-900">Edit</a>
                                    <form action="{{ route('about-sections.destroy', $section) }}" method="POST"
                                        onsubmit="return confirm('Delete?');">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="text-red-600 hover:text-red-900">Delete</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        @endif
    @endforeach

    @if(collect($sections)->isEmpty())
        <div class="bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center text-gray-500">
            No sections added yet. Click "Add Section" to get started.
        </div>
    @endif
@endsection