@extends('admin.layout')

@section('content')
    <div class="mb-8 flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">Edit Skill</h1>
        <a href="{{ route('skills.index') }}" class="text-gray-500 hover:text-gray-900">
            &larr; Back to Skills
        </a>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-2xl">
        <form action="{{ route('skills.update', $skill) }}" method="POST">
            @csrf
            @method('PUT')
            <div class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Skill Name</label>
                    <input type="text" name="name" id="name" value="{{ $skill->name }}"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        required>
                </div>

                <div>
                    <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                    <input type="text" name="category" id="category" value="{{ $skill->category }}"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        required>
                </div>

                <div>
                    <label for="proficiency_level" class="block text-sm font-medium text-gray-700">Proficiency Level
                        (1-100)</label>
                    <input type="number" name="proficiency_level" id="proficiency_level" min="1" max="100"
                        value="{{ $skill->proficiency_level }}"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border">
                </div>

                <div>
                    <label for="order" class="block text-sm font-medium text-gray-700">Display Order</label>
                    <input type="number" name="order" id="order" value="{{ $skill->order }}"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border">
                </div>
            </div>

            <div class="mt-6 flex justify-end">
                <button type="submit"
                    class="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800">
                    Update Skill
                </button>
            </div>
        </form>
    </div>
@endsection