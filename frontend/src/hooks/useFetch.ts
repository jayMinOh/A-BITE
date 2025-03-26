import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

interface UseFetchParams {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    queryKey?: unknown[];
}

const fetchWithAuth = async (
    url: string,
    method: string = "GET",
    body: any = null,
    accessToken: string | null
): Promise<any> => {
    const options: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
            ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, options);

    if (response.status === 401) throw new Error("Unauthorized");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    return response.json();
};

const refreshAccessToken = async (
    setAccessToken: React.Dispatch<React.SetStateAction<string | null>>,
    logout: () => void
): Promise<string> => {
    const refreshResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/refresh`, {
        method: "POST",
        credentials: "include",
    });

    if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        setAccessToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
        return data.accessToken;
    } else {
        logout();
        throw new Error("Refresh Token expired. Please log in again.");
    }
};

const useFetch = ({ url, method = "GET", body = null, queryKey }: UseFetchParams) => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("AuthContext must be used within AuthProvider");
    const { accessToken, setAccessToken, logout } = ctx;
    return useQuery({
        queryKey: queryKey ?? [url, method, body],
        queryFn: async () => {
            try {
                return await fetchWithAuth(url, method ?? "GET", body, accessToken);
            } catch (error: any) {
                if (error.message === "Unauthorized") {
                    try {
                        const newToken = await refreshAccessToken(setAccessToken, logout);
                        return await fetchWithAuth(url, method ?? "GET" , body, newToken);
                    } catch (refreshError) {
                        throw refreshError;
                    }
                }
                throw error;
            }
        },
        retry: 1,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
};

export default useFetch;
