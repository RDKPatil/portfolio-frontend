import axios from "axios";

const getBaseUrl = () => {
    let url = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

    // Only resolve localhost to 127.0.0.1 in development to avoid IPv6 issues
    if (typeof window === 'undefined' && url.includes('localhost')) {
        url = url.replace('localhost', '127.0.0.1');
    }

    return url;
};

const api = axios.create({
    baseURL: getBaseUrl(),
    withCredentials: true, // VERY important for Laravel sessions
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export async function fetchAPI(path: string, options: RequestInit = {}) {
    const method = options.method || 'GET';
    const body = options.body ? JSON.parse(options.body as string) : undefined;

    const response = await api({
        url: path,
        method,
        data: body,
    });

    return response.data;
}

export default api;
