import React,{useRef, useState, useEffect} from "react";
import "../../assets/styles/body.css";
import {useLoading} from "../../hooks/useLoading";  // 추가

interface BodyProps {
    loadedImages: { [key: string]: string };
}
const Body = ({loadedImages}: BodyProps) => {
    const { setIsLoading } = useLoading();
    const images = [
        loadedImages["main_bg_1.jpeg"],
        loadedImages["main_bg_2.jpeg"],
        loadedImages["main_bg_3.jpeg"]
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        if (images.every(img => img)) {
            setTimeout(()=>{
                setIsLoading(false);
            }, 1000);
        }
    }, [images, setIsLoading]);

    useEffect(() => {
        startAutoSlide();
        return () => clearTimeout(timeoutRef.current ?? undefined);
    }, [currentIndex]);

    const startAutoSlide = () => {
        clearTimeout(timeoutRef.current ?? undefined);
        timeoutRef.current = window.setTimeout(() => {
            nextSlide();
        }, 3000);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    return (
        <main className="body-container">
            <section className="section-p1">
                <div className="">
                    <div className="form-wrapper" style={{display:"flex"}}>
                        <div className="input-group">
                            <i className="icon fa fa-search"></i>
                            <input type="text" placeholder="Search hear" className={`login_input`}/>
                        </div>
                        <button type="button" className="close">
                            <span>&times;</span>
                        </button>
                    </div>
                </div>
            </section>
            <section id="food_bg" className="slider">
                <div style={{"display":"contents"}}>
                    <div className="simple-slider-wrapper">
                        <div className="control_prev" onClick={prevSlide}><span>&#10094;</span></div>
                        <div className="control_next" onClick={nextSlide}><span>&#10095;</span></div>
                        <div className="simple-slider-overflow-hidden">
                            <ul className="simple-slider">
                                {images.map((src, index) => (
                                    <li key={index} className="simple-slider-element"  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                        <img src={src} className="slide-image" alt={`slide ${index + 1}`} />
                                        <span className="slide-text">IMAGE {index + 1}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="dot-indicators">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`dot ${index === currentIndex ? "active" : ""}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img src="https://i.postimg.cc/PrN2Y6Cv/f1.png" alt="" />
                    <h6>Free Shipping</h6>
                </div>

                <div className="fe-box">
                    <img src="https://i.postimg.cc/qvycxW4q/f2.png" alt="" />
                    <h6>Online Order</h6>
                </div>

                <div className="fe-box">
                    <img src="https://i.postimg.cc/1Rdphyz4/f3.png" alt="" />
                    <h6>Save Money</h6>
                </div>

                <div className="fe-box">
                    <img src="https://i.postimg.cc/GpYc2JFZ/f4.png" alt="" />
                    <h6>Promotions</h6>
                </div>

                <div className="fe-box">
                    <img src="https://i.postimg.cc/4yFCwmv6/f5.png" alt="" />
                    <h6>Happy Sell</h6>
                </div>

                <div className="fe-box">
                    <img src="https://i.postimg.cc/gJN1knTC/f6.png" alt="" />
                    <h6>F24/7 Support</h6>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="https://i.postimg.cc/kg9YYbTn/f1.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Carton Astronault Tshirts</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="https://i.postimg.cc/2yhT2kvb/f2.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Carton Leave Tshirts</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="https://i.postimg.cc/VL9DtNm2/f3.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Rose Multicolor Tshirts</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="https://i.postimg.cc/vZ3hPS1z/f4.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Pink Flower Tshirts</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>

                    <div className="pro">
                        <img src="https://i.postimg.cc/q7FLrhx6/f5.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Purple Flowering Tshirts</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="https://i.postimg.cc/L86BZByZ/f7.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Short Knicker </h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>

                    <div className="pro">
                        <img src="https://i.postimg.cc/zDxJ2f0H/f6.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>2 in 1 Double Routed</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="https://i.postimg.cc/x8qcBrpP/n6.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Ash Short</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                </div>
            </section>

            <section id="banner" className="section-m1">
                <h4> Repair Service</h4>
                <h2>Up to <span>70% off </span> - All Tshirts and Accessories</h2>
                <button className="btn normal">Explore more</button>
            </section>

            <section id="product1" className="section-p1">
                <h2>New Arrivals</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="https://i.postimg.cc/hG1hqqK6/n1.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Carton Astronault Tshirts</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>


                    <div className="pro">
                        <img src="https://i.postimg.cc/BZkSkvxt/n2.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Carton Leave Tshirts</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>


                    <div className="pro">
                        <img src="https://i.postimg.cc/KYjcC3sk/n3.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Rose Multicolor Tshirts</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>

                    <div className="pro">
                        <img src="https://i.postimg.cc/vHvQBtJx/n4.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Pink Flower Tshirts</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>

                    <div className="pro">
                        <img src="https://i.postimg.cc/908J8S4q/n5.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Purple Flowering Tshirts</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>

                    <div className="pro">
                        <img src="https://i.postimg.cc/X7r8NsGQ/n7.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Short Knicker </h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>

                    <div className="pro">
                        <img src="https://i.postimg.cc/JhrH0hYM/n8.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>2 in 1 Double Routed</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>

                    <div className="pro">
                        <img src="https://i.postimg.cc/2Sq4mytJ/f8.jpg" alt=""/>
                        <div className="des">
                            <span>adidas</span>
                            <h5>Ash Short</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href=""><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                </div>
            </section>

            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classNameic dress is on sales at cara</span>
                    <button className="btn white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>spring/summer</h4>
                    <h2>upcoming season</h2>
                    <span>The best classNameic dress is on sales at cara</span>
                    <button className="btn white">Collection</button>
                </div>
            </section>

            <section id="banner3" className="section-p1">
                <div className="banner-box">
                    <h2>SEASONAL SALES</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>

                <div className="banner-box banner-img2">
                    <h2>SEASONAL SALES</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>

                <div className="banner-box banner-img3">
                    <h2>SEASONAL SALES</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>
            </section>
        </main>
    );
};

export default Body;
