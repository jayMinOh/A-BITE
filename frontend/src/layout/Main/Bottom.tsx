import React from "react";
import "../../assets/styles/bottom.css";


const Bottom = () => {
    return (
        <div style={{paddingTop:"40px"}}>
            <section id="newsletter" className="section-p1">
                <div className="newstext">
                    <h4>Sign Up for Newsletters</h4>
                    <p>Get Email updates about our latest shop and <span> special offers.</span> </p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Your email address"/>
                    <button className="btn normal">Sign Up</button>
                </div>
            </section>
            <footer className="section-p1 footer-content">
                <div className="col">
                    <div className="logo_image"></div>
                    <h4>Contact</h4>
                    <p><strong>Address:</strong>349, Olorilogbon street, Onigbogbo Lagos</p>
                    <p><strong>Phone:</strong>+23456876199, +23458903120</p>
                    <p><strong>Hours:</strong>10.00 - 18.00, Mon - Sat</p>
                    <div className="follow">
                        <h4>Follow Us</h4>
                        <div className="icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-pinterest-p"></i>
                        </div>
                    </div>
                </div>

                <div className="sec">
                    <div className="col">
                        <h4>About</h4>
                        <a href="#">About Us</a>
                        <a href="#">Delivery Information</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms and Condition</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="col install">
                        <h4>Install App</h4>
                        <p>From App Store or Google Play</p>

                        <div className="row">
                            <img src="https://i.postimg.cc/Y2s5mLdR/app.jpg" alt=""/>
                            <img src="https://i.postimg.cc/7YvyWTS6/play.jpg" alt=""/>
                        </div>
                        <p>Secured Payment Gateways</p>
                        <img src="https://i.postimg.cc/kgfzqVRW/pay.png" alt=""/>
                    </div>
                </div>
                <div className="coypright">
                    <p> © 2025 All rights reserved! </p>
                </div>
            </footer>
        </div>
    );
};

export default Bottom;
