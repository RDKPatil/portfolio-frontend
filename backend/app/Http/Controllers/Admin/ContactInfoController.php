<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactInfoController extends Controller
{
    public function edit()
    {
        $contact = \App\Models\ContactInfo::firstOrCreate([], [
            'email' => '',
            'phone' => '',
            'linkedin' => '',
            'github' => '',
        ]);
        return view('admin.contact.edit', compact('contact'));
    }

    public function update(\Illuminate\Http\Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'phone' => 'nullable|max:255',
            'linkedin' => 'nullable|url',
            'github' => 'nullable|url',
            'other_links' => 'nullable|string',
        ]);

        // Convert comma-separated links to JSON array
        if ($request->filled('other_links')) {
            $validated['other_links'] = array_map('trim', explode(',', $request->other_links));
        }

        $contact = \App\Models\ContactInfo::first();
        if ($contact) {
            $contact->update($validated);
        } else {
            \App\Models\ContactInfo::create($validated);
        }

        return redirect()->route('contact.edit')->with('success', 'Contact information updated successfully.');
    }
}
