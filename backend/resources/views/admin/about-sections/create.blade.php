@extends('admin.layout')

@section('content')
    <div class="mb-8 flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">Add Section</h1>
        <a href="{{ route('about-sections.index') }}" class="text-gray-500 hover:text-gray-900">
            &larr; Back
        </a>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-3xl">
        <form action="{{ route('about-sections.store') }}" method="POST">
            @csrf
            <div class="space-y-4">
                <div>
                    <label for="section_type" class="block text-sm font-medium text-gray-700">Section Type</label>
                    <select name="section_type" id="section_type"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        required>
                        <option value="">Select type...</option>
                        <option value="experience">Work Experience</option>
                        <option value="education">Education</option>
                        <option value="approach">Approach</option>
                    </select>
                </div>

                <div>
                    <label for="title" class="block text-sm font-medium text-gray-700">Title / Role / Degree</label>
                    <input type="text" name="title" id="title"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        placeholder="e.g., Senior Software Engineer" required>
                </div>

                <div>
                    <label for="company" class="block text-sm font-medium text-gray-700">Company / Institution</label>
                    <input type="text" name="company" id="company"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        placeholder="e.g., Tech Company Inc.">
                </div>

                <div>
                    <label for="duration" class="block text-sm font-medium text-gray-700">Duration</label>
                    <input type="text" name="duration" id="duration"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        placeholder="e.g., 2020 - Present">
                </div>

                <div>
                    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" id="description" rows="4"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        required></textarea>
                </div>

                <div>
                    <label for="order" class="block text-sm font-medium text-gray-700">Display Order</label>
                    <input type="number" name="order" id="order" value="0"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border">
                </div>
            </div>

            <div class="mt-6 flex justify-end">
                <button type="submit"
                    class="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800">
                    Save Section
                </button>
            </div>
        </form>
    </div>
@endsection