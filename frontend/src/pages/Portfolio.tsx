import React from "react";
import "../assets/styles/portfolio.css";


const Portfolio = () => {
    return (
        <main className="body-container">
            <div className="content">
                <div className="btn-back_to_top">
                    <span className="ti-arrow-up"></span>
                </div>


                <div className="topbar-nav fixed-top">
                    <div className="brand">
                        <img src="../assets/favicon.ico" alt="" width="30" height="30"/>
                    </div>
                    <h3 className="ml-1">Gram</h3>
                    <button className="btn-fab toggle-menu mr-3"><span className="ti-menu"></span></button>
                </div>
                <div className="vg-main-wrapper">
                    <div className="vg-page page-home" id="home" style={{backgroundImage: `url("../assets/img/bg_image_2.jpg")`}}>
                        <div className="caption wow zoomInUp">
                            <h1 className="fw-normal">Welcome</h1>
                            <h2 className="fw-medium fg-theme">I'm Stephen Doe</h2>
                            <p className="tagline">UI/UX & Web Designer</p>
                        </div>
                    </div>


                    <div className="vg-page page-about" id="about">
                        <div className="container py-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-place wow zoomIn">
                                        <img src="../assets/img/person.jpg" alt="Photo Profile"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="caption wow fadeInRight">
                                        <h2 className="fg-dark">Stephen Doe</h2>
                                        <p className="fg-theme fw-medium">UI/UX & Web Designer</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                        <ul className="theme-list">
                                            <li className="fg-dark"><b>From:</b> Texas, US</li>
                                            <li className="fg-dark"><b>Lives In:</b> Texas, US</li>
                                            <li className="fg-dark"><b>Age:</b> 25</li>
                                            <li className="fg-dark"><b>Gender:</b> Male</li>
                                        </ul>
                                        <button className="btn btn-theme btn-rounded">Download CV</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <h1 className="text-center fg-dark wow fadeInUp">My Skills</h1>
                            <div className="row py-3">
                                <div className="col-md-6">
                                    <h4 className="wow fadeInUp">Coding skills</h4>
                                    <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">JavaScript</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: "86%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>86%</div>
                                        </div>
                                    </div>
                                    <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">PHP</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: "81%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>80%</div>
                                        </div>
                                    </div>
                                    <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">HTML + CSS</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>100%</div>
                                        </div>
                                    </div>
                                    <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">Phyton</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>90%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="wow fadeInUp">Design Skills</h4>
                                    <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">UI / UX Design</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar"  style={{width: "92%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>92%</div>
                                        </div>
                                    </div>
                                    <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">Web Design</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar"  style={{width: "99%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>99%</div>
                                        </div>
                                    </div>
                                    <div className="progress-wrapper wow fadeInUp">
                                        <span className="caption">Logo Design</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar"  style={{width: "79%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>79%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container pt-5">
                            <div className="row">
                                <div className="col-md-6 wow fadeInRight">
                                    <h2 className="fg-dark">Education</h2>
                                    <ul className="timeline mt-4 pr-md-5">
                                        <li>
                                            <div className="title">2010</div>
                                            <div className="details">
                                                <h5>Specialize of course</h5>
                                                <small className="fg-theme">University of Study</small>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="title">2009</div>
                                            <div className="details">
                                                <h5>Specialize of course</h5>
                                                <small className="fg-theme">University of Study</small>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="title">2008</div>
                                            <div className="details">
                                                <h5>Specialize of course</h5>
                                                <small className="fg-theme">University of Study</small>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
                                    <h2 className="fg-dark">Experience</h2>
                                    <ul className="timeline mt-4 pr-md-5">
                                        <li>
                                            <div className="title">2017 - Current</div>
                                            <div className="details">
                                                <h5>Specialize of course</h5>
                                                <small className="fg-theme">University of Study</small>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="title">2014</div>
                                            <div className="details">
                                                <h5>Specialize of course</h5>
                                                <small className="fg-theme">University of Study</small>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="title">2011</div>
                                            <div className="details">
                                                <h5>Specialize of course</h5>
                                                <small className="fg-theme">University of Study</small>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="vg-page page-service" id="services">
                        <h1 className="text-center wow fadeInUp">Services</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-4 wow fadeInUp">
                                    <div className="card card-body">
                                        <div className="iconic">
                                            <span className="ti-layout"></span>
                                        </div>
                                        <h4 className="fg-theme">Web Design</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                        <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeInUp">
                                    <div className="card card-body">
                                        <div className="iconic">
                                            <span className="ti-announcement"></span>
                                        </div>
                                        <h4 className="fg-theme">SEO</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                        <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeInUp">
                                    <div className="card card-body">
                                        <div className="iconic">
                                            <span className="ti-desktop"></span>
                                        </div>
                                        <h4 className="fg-theme">Web Development</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                        <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeInUp">
                                    <div className="card card-body">
                                        <div className="iconic">
                                            <span className="ti-layout"></span>
                                        </div>
                                        <h4 className="fg-theme">Web Design</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                        <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeInUp">
                                    <div className="card card-body">
                                        <div className="iconic">
                                            <span className="ti-announcement"></span>
                                        </div>
                                        <h4 className="fg-theme">SEO</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                        <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeInUp">
                                    <div className="card card-body">
                                        <div className="iconic">
                                            <span className="ti-desktop"></span>
                                        </div>
                                        <h4 className="fg-theme">Web Development</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                        <a href="#" className="btn btn-theme btn-rounded">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="vg-page p-0" id="testimonial">
                        <div className="owl-carousel testi-carousel" style={{backgroundImage: `url("../assets/img/photo-2.jpg")`}}>
                            <div className="item">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, dicta atque. Voluptas illum quasi asperiores autem unde cupiditate temporibus quisquam iste rem dignissimos. Commodi placeat, quis omnis inventore asperiores sit.</p>
                                <span className="iconic">
            <span className="ti-quote-left"></span>
          </span>
                                <h4>Andrew Johanson</h4>
                            </div>
                            <div className="item">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, dicta atque. Voluptas illum quasi asperiores autem unde cupiditate temporibus quisquam iste rem dignissimos. Commodi placeat, quis omnis inventore asperiores sit.</p>
                                <span className="iconic">
            <span className="ti-quote-left"></span>
          </span>
                                <h4>Louis Herreira</h4>
                            </div>
                            <div className="item">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, dicta atque. Voluptas illum quasi asperiores autem unde cupiditate temporibus quisquam iste rem dignissimos. Commodi placeat, quis omnis inventore asperiores sit.</p>
                                <span className="iconic">
            <span className="ti-quote-left"></span>
          </span>
                                <h4>Patrice Clark</h4>
                            </div>
                        </div>
                    </div>


                    <div className="vg-page page-portfolio" id="portfolio">
                        <div className="container">
                            <div className="text-center wow fadeInUp">
                                <div className="badge badge-subhead">Portfolio</div>
                            </div>
                            <h1 className="text-center fw-normal wow fadeInUp">See my work</h1>
                            <div className="filterable-button py-3 wow fadeInUp" data-toggle="selected">
                                <button className="btn btn-theme-outline selected" data-filter="*">All</button>
                                <button className="btn btn-theme-outline" data-filter=".apps">Apps</button>
                                <button className="btn btn-theme-outline" data-filter=".template">Template</button>
                                <button className="btn btn-theme-outline" data-filter=".ios">IOS</button>
                                <button className="btn btn-theme-outline" data-filter=".ui-ux">UI/UX</button>
                                <button className="btn btn-theme-outline" data-filter=".graphic">Graphic</button>
                                <button className="btn btn-theme-outline" data-filter=".wireframes">Wireframes</button>
                            </div>

                            <div className="gridder my-3">
                                <div className="grid-item apps wow zoomIn">
                                    <div className="img-place" data-src="../assets/img/work/work-1.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Mobile Travel App</h5> <p>Travel, Discovery</p>">
                                        <img src="../assets/img/work/work-1.jpg" alt=""/>
                                        <div className="img-caption">
                                            <h5 className="fg-theme">Mobile Travel App</h5>
                                            <p>Travel, Discovery</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item template wireframes wow zoomIn">
                                    <div className="img-place" data-src="../assets/img/work/work-2.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Music App</h5> <p>Musics</p>">
                                        <img src="../assets/img/work/work-2.jpg" alt=""/>
                                        <div className="img-caption">
                                            <h5 className="fg-theme">Music App</h5>
                                            <p>Musics</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item apps ios wow zoomIn">
                                    <div className="img-place" data-src="../assets/img/work/work-3.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Gaming Dashboard</h5> <p>Games, Streaming</p>">
                                        <img src="../assets/img/work/work-3.jpg" alt=""/>
                                        <div className="img-caption">
                                            <h5 className="fg-theme">Gaming Dashboard</h5>
                                            <p>Games, Streaming</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item graphic ui-ux wow zoomIn">
                                    <div className="img-place" data-src="../assets/img/work/work-4.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Drugs Delivery App</h5> <p>Health, Drugs</p>">
                                        <img src="../assets/img/work/work-4.jpg" alt=""/>
                                        <div className="img-caption">
                                            <h5 className="fg-theme">Drugs Delivery App</h5>
                                            <p>Health, Drugs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item apps ios wow zoomIn">
                                    <div className="img-place" data-src="../assets/img/work/work-5.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Musics Discover</h5> <p>Musics, Dashboard</p>">
                                        <img src="../assets/img/work/work-5.jpg" alt=""/>
                                        <div className="img-caption">
                                            <h5 className="fg-theme">Musics Discover</h5>
                                            <p>Musics, Dashboard</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item graphic ui-ux wireframes wow zoomIn">
                                    <div className="img-place" data-src="../assets/img/work/work-6.jpg" data-fancybox data-caption="<h5 className='fg-theme'>Game Streaming</h5> <p>Games, Streaming</p>">
                                        <img src="../assets/img/work/work-6.jpg" alt=""/>
                                        <div className="img-caption">
                                            <h5 className="fg-theme">Game Streaming</h5>
                                            <p>Games, Streaming</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center wow fadeInUp">
                                <a href="javascript:void(0)" className="btn btn-theme">Load More</a>
                            </div>
                        </div>
                    </div>

                    <div className="vg-page page-blog" id="blog">
                        <h1 className="text-center fg-dark wow fadeInUp">Latest Post</h1>
                        <div className="container">
                            <div className="row post-grid">
                                <div className="col-md-6 col-lg-4 wow fadeInUp">
                                    <div className="card">
                                        <div className="img-place">
                                            <img src="../assets/img/work/work-9.jpg" alt=""/>
                                        </div>
                                        <div className="caption">
                                            <a href="javascript:void(0)" className="post-category">Technology</a>
                                            <a href="#" className="post-title">Invision design forward fund</a>
                                            <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeInUp">
                                    <div className="card">
                                        <div className="img-place">
                                            <img src="../assets/img/work/work-6.jpg" alt=""/>
                                        </div>
                                        <div className="caption">
                                            <a href="javascript:void(0)" className="post-category">Business</a>
                                            <a href="#" className="post-title">Announcing a plan for small teams</a>
                                            <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeInUp">
                                    <div className="card">
                                        <div className="img-place">
                                            <img src="../assets/img/work/work-1.jpg" alt=""/>
                                        </div>
                                        <div className="caption">
                                            <a href="javascript:void(0)" className="post-category">Design</a>
                                            <a href="#" className="post-title">5 basic tips for illustrating</a>
                                            <span className="post-date"><span className="sr-only">Published on</span> May 22, 2018</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center py-3 wow fadeInUp">
                                    <a href="blog-minibar.html" className="btn btn-theme">See All Post</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="vg-page page-contact" id="contact">
                        <h1 className="text-center fg-dark wow fadeInUp">Contact</h1>
                        <div className="container-fluid">
                            <div className="row py-5">
                                <div className="col-lg-7 wow zoomIn">
                                    <div className="vg-maps">
                                        <div id="google-maps" style={{width: "100%", height: "100%"}}></div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <form className="vg-contact-form">
                                        <div className="form-row">
                                            <div className="col-12 wow fadeInUp">
                                                <input className="form-control" type="text" name="Name" placeholder="Your Name"/>
                                            </div>
                                            <div className="col-6 wow fadeInUp">
                                                <input className="form-control" type="text" name="Email" placeholder="Email Address"/>
                                            </div>
                                            <div className="col-6 wow fadeInUp">
                                                <input className="form-control" type="text" name="Subject" placeholder="Subject"/>
                                            </div>
                                            <div className="col-12 wow fadeInUp">
                                                <textarea className="form-control" name="Message" rows={6} placeholder="Enter message here.."></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-theme mt-3 wow fadeInUp ml-1">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Portfolio;
