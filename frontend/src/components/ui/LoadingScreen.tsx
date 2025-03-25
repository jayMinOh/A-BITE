import React from "react";
import "../../assets/styles/loadingScreen.css";

const LoadingScreen = () => {

    return (
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-content">
                <h3>Sharing Flavors, Spreading Happiness<br/>A BITE</h3>
                <div id="cooking">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div id="area">
                        <div id="sides">
                            <div id="pan"></div>
                            <div id="handle"></div>
                        </div>
                        <div id="pancake">
                            <div id="pastry"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
