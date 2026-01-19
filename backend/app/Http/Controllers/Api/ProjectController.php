<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = \App\Models\Project::query();

        if ($request->has('featured') && $request->boolean('featured')) {
            $query->where('featured', true);
        }

        $projects = $query->orderBy('created_at', 'desc')->get(); // Or order by some other field

        return response()->json($projects);
    }

    public function show(string $slug)
    {
        $project = \App\Models\Project::where('slug', $slug)->firstOrFail();
        return response()->json($project);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
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
