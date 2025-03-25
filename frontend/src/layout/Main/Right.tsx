import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/animate.min.css";
import "../../assets/styles/owl.carouser.css";
import "../../assets/styles/nice-select.css";
import "../../assets/styles/jquery.fancybox.min.css";
import "../../assets/styles/virtual.css";
import "../../assets/styles/minibar.virtual.css";
import menus from "../../utils/menu.json";
import {useLoading} from "../../hooks/useLoading";

const Right = () => {
    const { setIsLoading } = useLoading();
    return (
        <div className="right-container">
            <div className="config">
                <div className="template-config">
                    {
                        menus.MENU_KR.map((menu) => (
                            <div className="d-block" key={menu.menuId}>
                                <Link onClick={()=>{setIsLoading(true)}} to={menu.linkUrl} className={` btn btn-fab btn-sm`} title={menu.menuName}><span className={`icon ${menu.iconName}`}></span></Link>
                            </div>
                        ))
                    }
                    <div className="d-block">
                        <span className="btn btn-fab btn-sm" title="Help"><span className="icon fa-solid fa-comments"></span></span>
                    </div>
                </div>
                <div className="set-menu">
                    <div className="color-bar">
                        <span className="color-item bg-theme-red selected"></span>
                        <span className="color-item bg-theme-blue"></span>
                        <span className="color-item bg-theme-green"></span>
                        <span className="color-item bg-theme-orange"></span>
                        <span className="color-item bg-theme-purple"></span>
                    </div>
                    <select className="custom-select d-block my-2">
                        <option value="">Choose Page</option>
                        <option value="index">Topbar</option>
                        <option value="blog-topbar">Blog (Topbar)</option>
                        <option value="index-2">Minibar</option>
                        <option value="blog-minibar">Blog (Minibar)</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Right;
