import React from "react";
import pagePreLoader from  "../../assets/styles/pagePreLoad.module.css";

const PagePreLoader = () => {
    return (
        <div className={`${pagePreLoader["loader-bg"]}`}>
            <div className={`${pagePreLoader["loader-track"]}`}>
                <div className={`${pagePreLoader["loader-fill"]}`}></div>
            </div>
        </div>
    );
}
export default PagePreLoader;