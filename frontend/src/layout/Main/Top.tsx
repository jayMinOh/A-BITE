import React, {useState, useContext} from "react";
import "../../assets/styles/top.css";
import { Link } from "react-router-dom";
import {useLoading} from "../../hooks/useLoading";

const Top = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isMobileToggled, setIsMobileToggled] = useState(false);
    const { setIsLoading } = useLoading();

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    const handleMobiletoggle = () => {
        setIsMobileToggled(!isMobileToggled);
    };

    return (
        <>
            <header className="navbar pcoded-header navbar-expand-lg navbar-light">
                <div className="top_container">
                    <div className="m-header">
                        <a className="mobile-menu" onClick={handleMobiletoggle}><span></span></a>
                        {isMobileToggled ?
                            <div className="top-search-bar">
                                <div className="form-wrapper">
                                    <div className="input-group">
                                        <i className="icon fa fa-search"></i>
                                        <input type="text" placeholder="Search hear" className={`login_input`}/>
                                    </div>
                                    <button type="button" className="close" onClick={handleMobiletoggle}>
                                        <span>&times;</span>
                                    </button>
                                </div>
                            </div>: ""
                        }
                        <Link className="b-brand" to={"/"} onClick={()=>{setIsLoading(true)} }>
                            <div className="logo_image" style={{"width": "150px", "height": "30px"}}></div>
                        </Link>
                        <a className="mob-toggler">
                            <i className="icon feather icon-more-vertical fa-solid fa-ellipsis-vertical"></i>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                {/*<a className="pop-search"  onClick={handleToggle}><i className="icon fa-solid fa-magnifying-glass icon-search feather"></i></a>*/}
                                {
                                    isToggled ?
                                    <div className="top-search-bar">
                                        <div className="form-wrapper">
                                            <div className="input-group">
                                                <i className="icon fa fa-search"></i>
                                                <input type="text" placeholder="Search hear" className={`login_input`}/>
                                            </div>
                                            <button type="button" className="close" onClick={handleToggle}>
                                                <span>&times;</span>
                                            </button>
                                        </div>
                                    </div>: ""
                                }
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <div className="dropdown">
                                    <a className="dropdown-toggle" href="#" data-toggle="dropdown">
                                        <i className="icon feather icon-bell fa-solid fa-bell"></i>
                                        <span className="badge badge-pill badge-danger">5</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right notification">
                                        <div className="noti-head">
                                            <h6 className="d-inline-block m-b-0">Notifications</h6>
                                            <div className="float-right">
                                                <a className="m-r-10">mark as read</a>
                                                <a >clear all</a>
                                            </div>
                                        </div>
                                        <ul className="noti-body">
                                            <li className="n-title">
                                                <p className="m-b-0">NEW</p>
                                            </li>
                                            <li className="notification">
                                                <div className="media">
                                                    <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
                                                    <div className="media-body">
                                                        <p><strong>John Doe</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>5 min</span></p>
                                                        <p>New ticket Added</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="n-title">
                                                <p className="m-b-0">EARLIER</p>
                                            </li>
                                            <li className="notification">
                                                <div className="media">
                                                    <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
                                                    <div className="media-body">
                                                        <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>10 min</span></p>
                                                        <p>Prchace New Theme and make payment</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="notification">
                                                <div className="media">
                                                    <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
                                                    <div className="media-body">
                                                        <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>12 min</span></p>
                                                        <p>currently login</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="notification">
                                                <div className="media">
                                                    <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                                    <div className="media-body">
                                                        <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                        <p>Prchace New Theme and make payment</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="noti-footer">
                                            <a >show all</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown drp-user">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="icon feather fa-regular fa-user icon-user"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right profile-notification">
                                        <div className="pro-head">
                                            <img src="assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image"/>
                                            <span>John Doe</span>
                                            <a href="auth-signin.html" className="dud-logout" title="Logout">
                                                <i className="feather icon-log-out"></i>
                                            </a>
                                        </div>
                                        <ul className="pro-body">
                                            <li><a className="dropdown-item"><i className="feather icon-user"></i> Profile</a></li>
                                            <li><a className="dropdown-item"><i className="feather icon-mail"></i> My Messages</a></li>
                                            <li><a className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );

};

export default Top;
