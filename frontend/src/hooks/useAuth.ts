// src/hooks/useAuth.ts
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

export const useAuth = (): {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
} => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
