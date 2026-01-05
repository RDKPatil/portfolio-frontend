@extends('admin.layout')

@section('content')
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Contact Information</h1>
        <p class="text-gray-500 mt-1">Update your contact details displayed on the frontend.</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-2xl">
        <form action="{{ route('contact.update') }}" method="POST">
            @csrf
            @method('PUT')
            <div class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email Address *</label>
                    <input type="email" name="email" id="email" value="{{ $contact->email }}"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        required>
                </div>

                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="text" name="phone" id="phone" value="{{ $contact->phone }}"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border">
                </div>

                <div>
                    <label for="linkedin" class="block text-sm font-medium text-gray-700">LinkedIn Profile URL</label>
                    <input type="url" name="linkedin" id="linkedin" value="{{ $contact->linkedin }}"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        placeholder="https://linkedin.com/in/yourprofile">
                </div>

                <div>
                    <label for="github" class="block text-sm font-medium text-gray-700">GitHub Profile URL</label>
                    <input type="url" name="github" id="github" value="{{ $contact->github }}"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        placeholder="https://github.com/yourusername">
                </div>

                <div>
                    <label for="other_links" class="block text-sm font-medium text-gray-700">Other Links
                        (comma-separated)</label>
                    <input type="text" name="other_links" id="other_links"
                        value="{{ is_array($contact->other_links) ? implode(', ', $contact->other_links) : '' }}"
                        class="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 p-2 border"
                        placeholder="https://twitter.com/you, https://portfolio.com">
                    <p class="mt-1 text-sm text-gray-500">Separate multiple URLs with commas</p>
                </div>
            </div>

            <div class="mt-6 flex justify-end">
                <button type="submit"
                    class="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800">
                    Update Contact Info
                </button>
            </div>
        </form>
    </div>
@endsection