import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/form.css";
import "../assets/styles/loginSignup.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useAuth } from "../hooks/useAuth";
import { useLoading } from "../hooks/useLoading";

const MemoizedParticles = React.memo(({ options }: { options: any }) => (
    <Particles options={options} />
));

const LoginSignup = () => {
    const isRemember = localStorage.getItem("rememberMe") === "true";
    const [rememberMe, setRememberMe] = useState(isRemember);
    const storedUserInfo = localStorage.getItem("userInfo");
    const parsedUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;
    const [userId, setUserId] = useState<string>(isRemember ? parsedUserInfo?.userId || "" : "");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const { isLoading } = useLoading();
    const [ init, setInit ] = useState(false);
    const navigate = useNavigate();
    const [activeForm, setActiveForm] = useState(true);
    const options = useMemo(() => ({
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: { enable: false },
                onClick: { enable: false },
                resize: { enable: false },
            },
            modes: {
                push: { quantity: 0 },
                repulse: { distance: 0 }
            }
        },
        particles: {
            number: {
                value: 10,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#2d4a77"
            },
            shape: {
                type: "polygon",
                stroke: {
                    width: 0,
                    color: "#2d4a77"
                },
                polygon: {
                    nb_sides: 6
                }
            },
            opacity: {
                value: 0.1,
                random: true
            },
            size: {
                value: 200,
                random: false,
                anim: {
                    enable: false,
                    speed: 20,
                    size_min: 100,
                    sync: false
                }
            },
            move: {
                enable: true,
                speed: 10,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        detectRetina: true,
    } as const), []);


    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userId && password) {
            const userInfo= {
                userId: userId, // 사용자 ID
                password: password, // 비밀번호
            };
            const token = await login(userInfo); // Context를 통해 로그인 처리
            if(token != null){

                navigate("/"); // 메인 페이지로 이동
            }
        } else {
            alert("아이디와 비밀번호를 입력해주세요.");
        }
    };

    const signupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    const handleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) =>{
        localStorage.setItem("rememberMe", e.target.checked.toString());
        setRememberMe(e.target.checked);
    }

    const switchFormClick = () => {
        setActiveForm(!activeForm);
    };

    return (
        <div className={`login_body`}>
        { init && <div><MemoizedParticles options={options} /> </div>}
        <div className={`login_container ${activeForm ? "":"right-panel-active"}`}>
            <div className={`form-container sign-up-container`}>
                <form onSubmit={signupSubmit} className="loginSignupContainer login_form">
                    <div className="logo_image"></div>
                    <div className="social-container">
                        <span className="social login_span"><i className="fab fa-facebook-f"></i></span>
                        <span className="social login_span"><i className="fab fa-google-plus-g fa-google-icon"></i></span>
                        <span className="social login_span"><i className="fab fa-linkedin-in"></i></span>
                    </div>
                    <span className={`login_span`}>or use your email for registration</span>
                    <div className="form-wrapper">
                        <div className="input-group">
                            <i className="fa fa-envelope"></i>
                            <input type="email" placeholder="Email" className={`login_input`} />
                        </div>
                        <div className="input-group">
                            <i className="fa fa-lock"></i>
                            <input type="password" placeholder="Password" className={`login_input`} />
                        </div>
                        <div className="input-group">
                            <i className="fa fa-lock"></i>
                            <input type="password" placeholder="Repeat Password" className={`login_input`}/>
                        </div>
                    </div>
                    <button className={`login_button`} type="submit">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={handleSubmit} className="loginSignupContainer login_form">
                    <div className="logo_image"></div>
                    <div className="social-container">
                        <span className="social login_span"><i className="fab fa-facebook-f"></i></span>
                        <span className="social login_span"><i className="fab fa-google-plus-g fa-google-icon"></i></span>
                        <span className="social login_span"><i className="fab fa-linkedin-in"></i></span>
                    </div>
                    <span className={`login_span`}>or use your account</span>
                    <div className="form-wrapper">
                        <div className="input-group">
                            <i className="fa fa-envelope"></i>
                            <input type="email" placeholder="Email" className={`login_input`} value={userId}  onChange={(e)=> {e.preventDefault(); setUserId(e.target.value)}} />
                        </div>
                        <div className="input-group">
                            <i className="fa fa-lock"></i>
                            <input type="password" placeholder="Password" className={`login_input`} onChange={(e) => {e.preventDefault(); setPassword(e.target.value)}} />
                        </div>
                    </div>
                    <span className="icon_wrap login_span">
                        <input id="desktop_check" type="checkbox" className="check login_input" checked={rememberMe} onChange={handleRememberMe} />
                        <label htmlFor="desktop_check" style={{"whiteSpace": "nowrap"}}><span className="icon login_span"></span> Remember me?</label>
                    </span>
                    <button type="submit" className={`login_button`} style={{"marginTop": "10px"}}>Login</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p className={`login_p`}>To keep connected with us please login with your personal info</p>
                        <button className="ghost login_button" onClick={switchFormClick}><i className="fa-solid fa-left-long"></i> Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p className={`login_p`}>Enter your personal details and start journey with us</p>
                        <button className="ghost login_button" onClick={switchFormClick}>Sign Up <i className="fa-solid fa-right-long"/></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="mobile-container">
            <div className="login-wrap">
                <div className="logo_image" style={{"position":"relative", "width":"100%", "top":"-25px"}}></div>
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in login_input" checked={activeForm} onChange={switchFormClick} />
                    <label htmlFor="tab-1" className="tab">Log In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up login_input" onChange={switchFormClick} />
                    <label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-form">
                        <div className="sign-in-htm"  style={{"display":`${activeForm ? "block": "none"}`}}>
                            <div className="social-container">
                                <span className="social login_span"><i className="fab fa-facebook-f"></i></span><span className="social login_span"><i className="fab fa-google-plus-g fa-google-icon"></i></span><span className="social login_span"><i className="fab fa-linkedin-in"></i></span>
                            </div>
                            <span className={`login_span`} style={{"textAlign": "center", "width": "100%", "display": "inline-block"}}>or use your account</span>
                            <div className="group">
                                <label htmlFor="user" className="label">Email</label>
                                <input id="user" type="text" className="input login_input" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input login_input" datatype="password" />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check login_input" checked={rememberMe} onChange={handleRememberMe} />
                                <label htmlFor="check"><span className="icon login_span"></span> Remember me?</label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button login_input"  value="Login" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <a className={`login_a`}>Forgot Password?</a>
                            </div>
                        </div>
                        <div className="sign-up-htm">
                            <div className="social-container">
                                <span className="social login_span"><i className="fab fa-facebook-f"></i></span>
                                <span className="social login_span"><i className="fab fa-google-plus-g fa-google-icon"></i></span>
                                <span className="social login_span"><i className="fab fa-linkedin-in"></i></span>
                            </div>
                            <span className={`login_span`} style={{"textAlign": "center", "width": "100%", "display": "inline-block"}}>or use your email for registration</span>
                            <div className="group">
                                <label className="label">Email</label>
                                <input type="text" className="input login_input" />
                            </div>
                            <div className="group">
                                <label className="label">Password</label>
                                <input type="password" className="input login_input" datatype="password" />
                            </div>
                            <div className="group">
                                <label className="label">Repeat Password</label>
                                <input type="password" className="input login_input" datatype="password" />
                            </div>
                            <div className="group">
                                <input type="submit" className="button login_input" value="Sign Up" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label >Already Member?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginSignup;