<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AboutSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sections = \App\Models\AboutSection::all()->groupBy('section_type');
        return view('admin.about-sections.index', compact('sections'));
    }

    public function create()
    {
        return view('admin.about-sections.create');
    }

    public function store(\Illuminate\Http\Request $request)
    {
        $validated = $request->validate([
            'section_type' => 'required|in:experience,education,approach',
            'title' => 'required|max:255',
            'company' => 'nullable|max:255',
            'duration' => 'nullable|max:255',
            'description' => 'required',
            'order' => 'nullable|integer',
        ]);

        \App\Models\AboutSection::create($validated);

        return redirect()->route('about-sections.index')->with('success', 'Section added successfully.');
    }

    public function edit(\App\Models\AboutSection $aboutSection)
    {
        return view('admin.about-sections.edit', compact('aboutSection'));
    }

    public function update(\Illuminate\Http\Request $request, \App\Models\AboutSection $aboutSection)
    {
        $validated = $request->validate([
            'section_type' => 'required|in:experience,education,approach',
            'title' => 'required|max:255',
            'company' => 'nullable|max:255',
            'duration' => 'nullable|max:255',
            'description' => 'required',
            'order' => 'nullable|integer',
        ]);

        $aboutSection->update($validated);

        return redirect()->route('about-sections.index')->with('success', 'Section updated successfully.');
    }

    public function destroy(\App\Models\AboutSection $aboutSection)
    {
        $aboutSection->delete();
        return redirect()->route('about-sections.index')->with('success', 'Section deleted successfully.');
    }
}
