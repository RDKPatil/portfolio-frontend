<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        slate: {
                            850: '#1e293b',
                            900: '#0f172a',
                        }
                    }
                }
            }
        }
    </script>
</head>

<body class="bg-gray-50 text-slate-900 font-sans antialiased h-screen overflow-hidden">
    <div class="min-h-screen flex">
        <!-- Sidebar -->
        <aside class="w-64 bg-slate-900 text-white flex-shrink-0 hidden md:flex flex-col">
            <div class="p-6 border-b border-slate-800">
                <h1 class="text-xl font-bold tracking-tight">Admin Console</h1>
            </div>
            <nav class="flex-1 p-4 space-y-1">
                <a href="/admin/dashboard"
                    class="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
                    Dashboard
                </a>
                <a href="/admin/projects"
                    class="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors {{ request()->is('admin/projects*') ? 'bg-slate-800 text-white' : '' }}">
                    Projects
                </a>
                <a href="/admin/skills"
                    class="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors {{ request()->is('admin/skills*') ? 'bg-slate-800 text-white' : '' }}">
                    Skills
                </a>
                <a href="/admin/about-sections"
                    class="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors {{ request()->is('admin/about-sections*') ? 'bg-slate-800 text-white' : '' }}">
                    About/Experience
                </a>
                <a href="/admin/contact"
                    class="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors {{ request()->is('admin/contact*') ? 'bg-slate-800 text-white' : '' }}">
                    Contact Info
                </a>
                <a href="/admin/messages"
                    class="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors {{ request()->is('admin/messages*') ? 'bg-slate-800 text-white' : '' }}">
                    Messages
                </a>
                <a href="/admin/posts"
                    class="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors {{ request()->is('admin/posts*') ? 'bg-slate-800 text-white' : '' }}">
                    Blog Posts
                </a>
            </nav>
            <div class="p-4 border-t border-slate-800">
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit" class="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white">
                        Logout
                    </button>
                </form>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto h-screen">
            <header
                class="bg-white shadow-sm border-b border-gray-200 p-4 sticky top-0 z-10 flex justify-between items-center md:hidden">
                <h1 class="font-bold">Portfolio Admin</h1>
                <button class="text-gray-500">Menu</button>
            </header>

            <div class="p-8 max-w-7xl mx-auto">
                @if(session('success'))
                    <div class="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r shadow-sm">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm text-green-700">{{ session('success') }}</p>
                            </div>
                        </div>
                    </div>
                @endif

                @yield('content')
            </div>
        </main>
    </div>
</body>

</html>