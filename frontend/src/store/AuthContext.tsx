import React, { createContext, useState, ReactNode } from "react";

interface UserInfo {
    userId: string;
    memberNo: string;
    langType: string;
}

interface AuthContextType {
    accessToken: string | null;
    setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
    user: UserInfo | null;
    login: (userInfo: { userId: string; password: string }) => Promise<string | null>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [accessToken, setAccessToken] = useState(()=>{
        return localStorage.getItem("accessToken");
    });
    const [user, setUser] = useState<UserInfo | null>(null);

    const login = async (userInfo: { userId: string; password: string }) => {
        try{
            setAccessToken(null);
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(userInfo)
            });
            if(response.ok){
                const data = await response.json();
                setAccessToken(data.accessToken);
                // 토큰을 localStorage에 저장
                localStorage.setItem("accessToken", data.accessToken);

                const login_info: UserInfo = {
                    userId: data.loginId,
                    memberNo: data.memberNo,
                    langType: data.langType,
                };

                localStorage.setItem("userInfo", JSON.stringify(login_info));
                setUser(login_info);
                return data.accessToken;
            } else {
                alert(`status:${response.status} , message: ${response.statusText}`);
                setAccessToken(null);
                return null;
            }
        }catch(error){
            alert(error);
            setAccessToken(null);
            return null;
        }
    };

    const logout = () => {
        setAccessToken(null);
        setUser(null);
        localStorage.removeItem("accessToken");
        document.cookie="refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    };

    return (
        <AuthContext value={{ accessToken, setAccessToken, user, login, logout }}>
            {children}
        </AuthContext>
    );
};
