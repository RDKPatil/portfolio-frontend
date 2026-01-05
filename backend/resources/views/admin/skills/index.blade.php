@extends('admin.layout')

@section('content')
    <div class="flex justify-between items-center mb-8">
        <div>
            <h1 class="text-3xl font-bold text-gray-900">Skills</h1>
            <p class="text-gray-500 mt-1">Manage your technical skills and expertise.</p>
        </div>
        <a href="{{ route('skills.create') }}"
            class="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
            + Add Skill
        </a>
    </div>

    @foreach($skills as $category => $categorySkills)
        <div class="mb-8">
            <h2 class="text-xl font-bold text-gray-700 mb-4">{{ $category }}</h2>
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Skill Name</th>
                            <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Proficiency</th>
                            <th class="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Order</th>
                            <th class="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        @foreach($categorySkills as $skill)
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ $skill->name }}</td>
                                <td class="px-6 py-4 text-sm text-gray-500">{{ $skill->proficiency_level }}%</td>
                                <td class="px-6 py-4 text-sm text-gray-500">{{ $skill->order }}</td>
                                <td class="px-6 py-4 text-right text-sm">
                                    <a href="{{ route('skills.edit', $skill) }}"
                                        class="text-slate-600 hover:text-slate-900 mr-4">Edit</a>
                                    <form action="{{ route('skills.destroy', $skill) }}" method="POST" class="inline-block"
                                        onsubmit="return confirm('Delete this skill?');">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="text-red-600 hover:text-red-900">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    @endforeach

    @if($skills->isEmpty())
        <div class="bg-white p-12 rounded-xl shadow-sm border border-gray-200 text-center text-gray-500">
            No skills added yet. Click "Add Skill" to get started.
        </div>
    @endif
@endsection