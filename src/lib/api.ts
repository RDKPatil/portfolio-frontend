import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
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
