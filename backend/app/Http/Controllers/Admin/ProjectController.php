<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = \App\Models\Project::latest()->get();
        return view('admin.projects.index', compact('projects'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.projects.create');
    }

    public function store(\Illuminate\Http\Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'slug' => 'required|unique:projects,slug|max:255',
            'category' => 'required|max:255',
            'tech_stack' => 'nullable|string', // Comma separated string from input
            'summary' => 'required',
            'problem' => 'nullable',
            'approach' => 'nullable',
            'solution' => 'nullable',
            'impact' => 'nullable',
            'featured' => 'nullable|boolean',
        ]);

        // Convert comma-separated tech stack to array
        if ($request->filled('tech_stack')) {
            $validated['tech_stack'] = array_map('trim', explode(',', $request->tech_stack));
        } else {
            $validated['tech_stack'] = [];
        }

        $validated['featured'] = $request->has('featured');

        \App\Models\Project::create($validated);

        return redirect()->route('projects.index')->with('success', 'Project created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
