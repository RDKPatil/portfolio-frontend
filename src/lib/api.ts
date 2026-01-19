import axios from "axios";

const getBaseUrl = () => {
    // For debugging, forcefully use 127.0.0.1 on server
    if (typeof window === 'undefined') {
        return 'http://127.0.0.1:8000/api';
    }
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
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
