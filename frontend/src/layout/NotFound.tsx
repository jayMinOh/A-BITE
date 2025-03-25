import React from "react";
import "../assets/styles/font_montserrat.css";
import "../assets/styles/notFound.css";

interface NotFoundProps {
    activeTab? : {
        title: string;
        path: string;
    };
}

const NotFound: React.FC<NotFoundProps> = ({ activeTab }) => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>
                    The page you are looking for might have been removed, had its name
                    changed, or is temporarily unavailable.
                </p>
                {activeTab && (
                    <p>
                        <strong>Tab Title:</strong> {activeTab.title}
                        <br />
                        <strong>Tab Path:</strong> {activeTab.path}
                    </p>
                )}
                <a href="/">Go To Homepage</a>
            </div>
        </div>
    );
};

export default NotFound;
