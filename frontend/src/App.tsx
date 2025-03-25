import React, { useEffect, useContext, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import NotFound from "./layout/NotFound";
import "./assets/styles/reset.min.css";
import "./assets/styles/global.css";
import "./assets/styles/bootstrap.min.css";
import "./assets/fonts/css/all.min.css";
import "./assets/styles/animate.min.css";
import {preloadImages} from "./utils/imagePreloader";
import mainBg1 from "./assets/images/main_bg_12.jpg";
import mainBg2 from "./assets/images/main_bg_11.jpeg";
import mainBg3 from "./assets/images/main_bg_13.jpeg";
import Nearby from "./pages/Nearby";
import Body from "./layout/Main/Body";
import Portfolio from "./pages/Portfolio";
import {useAuth} from "./hooks/useAuth";
import LoginSignup from "./layout/LoginSignup";

const App = () => {
    const { accessToken, setAccessToken } = useAuth();
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const imageUrls = {
            "main_bg_1.jpeg": mainBg1,
            "main_bg_2.jpeg": mainBg2,
            "main_bg_3.jpeg": mainBg3
        };

        preloadImages(Object.values(imageUrls)).then(() => {
            setLoadedImages(imageUrls);
        });

        const token = accessToken || localStorage.getItem("accessToken");

        if (token) {
            setAccessToken(token);
        } else {
            // window.history.pushState("", "", `/`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={accessToken ? <Layout /> : <LoginSignup /> }>
                    <Route index element={<Body loadedImages={loadedImages} />} />
                    <Route path="nearby" element={<Nearby />} />
                    <Route path="portfolio" element={<Portfolio />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
