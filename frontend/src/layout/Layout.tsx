import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import Top from "./Main/Top";
import Right from "./Main/Right";
import Bottom from "./Main/Bottom";
import "../assets/styles/layout.css";
import LoadingScreen from "../components/ui/LoadingScreen";
import {useAuth} from "../hooks/useAuth";
import {useLoading} from "../hooks/useLoading";


const Layout = () => {
    const  { accessToken, setAccessToken} = useAuth();
    const { isLoading } = useLoading();

    useEffect(() => {
        const token = accessToken || localStorage.getItem("accessToken");
        // AuthContext에 상태 반영
        if (!accessToken && token) {
            setAccessToken(token);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            {isLoading ? (
                <>
                <LoadingScreen/>
                <Outlet />
                </>
            ) : (
                <main className="main-page">
                    <Top/>
                    <Right/>
                    <main className="main-content">
                        <div className="body-container">
                            <div className="body-pages">
                                <Outlet />
                            </div>
                        </div>
                    </main>
                    <Bottom/>
                </main>
            )}
        </>
    );
};

export default Layout;
