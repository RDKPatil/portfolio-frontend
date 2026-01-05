<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $skills = \App\Models\Skill::all()->groupBy('category');
        return view('admin.skills.index', compact('skills'));
    }

    public function create()
    {
        return view('admin.skills.create');
    }

    public function store(\Illuminate\Http\Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'category' => 'required|max:255',
            'proficiency_level' => 'nullable|integer|min:1|max:100',
            'order' => 'nullable|integer',
        ]);

        \App\Models\Skill::create($validated);

        return redirect()->route('skills.index')->with('success', 'Skill added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    public function edit(\App\Models\Skill $skill)
    {
        return view('admin.skills.edit', compact('skill'));
    }

    public function update(\Illuminate\Http\Request $request, \App\Models\Skill $skill)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'category' => 'required|max:255',
            'proficiency_level' => 'nullable|integer|min:1|max:100',
            'order' => 'nullable|integer',
        ]);

        $skill->update($validated);

        return redirect()->route('skills.index')->with('success', 'Skill updated successfully.');
    }

    public function destroy(\App\Models\Skill $skill)
    {
        $skill->delete();
        return redirect()->route('skills.index')->with('success', 'Skill deleted successfully.');
    }
}
