import React from 'react';
import './Style/Allstyle.css';
import banner from './Images/banner/img-2.png';
import about from './Images/bg/about_img.png';
import layer from './Images/svg/015-layers.svg';
import network from './Images/svg/004-network.svg';
import idea from './Images/svg/005-idea.svg';
import like from './Images/svg/008-like.svg';
import smart_phone from './Images/svg/003-smartphone.svg';
import search from './Images/svg/009-search.svg';
import server from './Images/svg/013-server.svg';
import file from './Images/svg/006-file.svg';
import mobile from './Images/bg/mobile.png';
import icon_1 from './Images/icon/icon_1.png';
import icon_2 from './Images/icon/icon_2.png';
import icon_3 from './Images/icon/icon_3.png';
import post_1 from './Images/process/post1.jpg';
import post_2 from './Images/process/post2.jpg';
import post_3 from './Images/process/post3.jpg';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* start Home */}
      <section className="banner">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-8 col-lg-5">
                    <div className="banner-content">
                        <span>Online presence</span>
                        <h1 className="mt-2">Maximize your visibility.</h1>
                        <p>Generate maximum return from your online campaigns with proactive support supplied by our online advertising specialists .</p>
                        <Link to="about" className="btn btn-main-2">Get started 
                        <i className="fas fa-angle-right ml-2"></i></Link>  
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="banner-img mt-5 mt-lg-0">
                        <img src={banner} alt="" className="img-fluid w-100"/>
                    </div>
                </div>
            </div>
        </div>
      </section>
      {/* end Home */}
      {/* start feature */}
      <section className="feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="feature-item">
                <i className="fas fa-bolt c1"></i>
                <h4>Boost Your <br/>Businesss Sales</h4>
                <Link to="home" className="">Read more</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="feature-item">
                <i className="fas fa-eye c2"></i>
                <h4>Increased <br/>overall Visibility</h4>
                <Link to="home" className="">Read more</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="feature-item">
                <i className="fas fa-bar-chart c3"></i>
                <h4>Competitive <br/>Edge to market</h4>
                <Link to="home" className="">Read more</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="feature-item">
                <i className="fas fa-thumbs-up c4"></i>
                <h4>Better <br/>Than Ever ROI</h4>
                <Link to="home" className="">Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end feature */}
      {/* start about */}
      <section className="section about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-img mb-5 mb-lg-0">
                <img src={about} alt="" className="img-fluid w-100"/>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item">
                <span className="text-color">No #1 Ranking at Google</span>
                <h2>We develop digital strategies products and services.</h2>
                <p>We brand value Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis assumenda vero laborum nostrum unde soluta voluptatibus quidem, ut necessitatibus, labore quasi aliquam .</p>

                <Link to="home" className="btn btn-main">Our Services 
                <i className="fas fa-angle-right ml-2"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about */}
      {/* start service */}
      <section className="section service">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-heading mb-5 text-center">
                <span className="text-color">Our Services</span>
                <h2>We Love to Help Your Perfect SEO Business</h2>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="service-item">
                    <ul className="list-unstyled">
                      <li>
                        <div className="about-item-block">
                          <div className="about-item-icon">
                            <img src={layer} alt="" className="img-fluid"/>
                          </div>
                          <div className="about-item-content">
                            <h4>Content Marketing</h4>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about-item-block">
                          <div className="about-item-icon">
                            <img src={network} alt="" className="img-fluid"/>
                          </div>
                          <div className="about-item-content">
                            <h4>Link Building</h4>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about-item-block">
                          <div className="about-item-icon">
                            <img src={idea} alt="" className="img-fluid"/>
                          </div>
                          <div className="about-item-content">
                            <h4>Creative and Effective idea</h4>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about-item-block">
                          <div className="about-item-icon">
                            <img src={like} alt="" className="img-fluid"/>
                          </div>
                          <div className="about-item-content">
                            <h4>Professional Support</h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              
                <div className="col-lg-6 col-md-6">
                  <div className="service-item">
                    <ul className="list-unstyled">
                      <li>
                        <div className="about-item-block">
                          <div className="about-item-icon">
                            <img src={smart_phone} alt="" className="img-fluid"/>
                          </div>
                          <div className="about-item-content">
                            <h4>Emailing Marketing</h4>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about-item-block">
                          <div className="about-item-icon">
                            <img src={search} alt="" className="img-fluid"/>
                          </div>
                          <div className="about-item-content">
                            <h4>Tracking and Analytics</h4>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about-item-block">
                          <div className="about-item-icon">
                            <img src={server} alt="" className="img-fluid"/>
                          </div>
                          <div className="about-item-content">
                            <h4>Cloud Service</h4>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about-item-block">
                          <div className="about-item-icon">
                            <img src={file} alt="" className="img-fluid"/>
                          </div>
                          <div className="about-item-content">
                            <h4>Data privacy</h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 d-md-none d-lg-block">
              <div className="service-img mt-3 mt-lg-0">
                <img src={mobile} alt="" className="img-fluid w-100"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end service */}
      {/* start couner */}
      <section className="counter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="heading text-center">
                <span className="text-color">Our Experience</span>
                <h2>We have completed 150+ projects succesfully</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item mb-5 mb-lg-0">
                <i className="fas fa-globe"></i>
                <div className="counter-stat">
                  <span className="count h2">15</span><span>K</span>
                </div>
                <p>Global Customer</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item mb-5 mb-lg-0">
                <i className="fas fa-square-arrow-up-right"></i>
                <div className="counter-stat">
                  <span className="count h2">1,200</span><span>+</span>
                </div>
                <p>Potential Growth</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item mb-5 mb-lg-0">
                <i className="fas fa-heart"></i>
                <div className="counter-stat">
                  <span className="count h2">600</span><span>%</span>
                </div>
                <p>Expert Employee</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item mb-5 mb-lg-0">
                <i className="fas fa-thumbs-up"></i>
                <div className="counter-stat">
                  <span className="count h2">80</span><span>+</span>
                </div>
                <p>Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end couner */}
      {/* start price */}
      <section className="section pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="heading text-center">
                <span className="text-color">Our pricing</span>
                <h2 className="mb-3">No Hidden charges and fee in these pricing</h2>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item mb-4 mb-lg-0">
                <div className="price-header">
                  <span className="h4">Basic Plan</span>
                  <img src={icon_1} alt="" className="img-fluid"/>
                  <h2>29$</h2>
                </div>
                <div className="price-features">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check"></i>Real-time Live Sharing</li>
                    <li><i className="fas fa-check"></i>Team Collaboration</li>
                    <li><i className="fas fa-check"></i>Create and design responsive </li>
                    <li><i className="fas fa-check"></i>Full Security</li>
                    <li><i className="fas fa-check"></i>Poweful admin panel</li>
                    <li><i className="fas fa-check"></i>24 hours support</li>
                  </ul>
                </div>
                <button className="btn btn-main-2">Purchase now</button>
              </div>
            </div> 
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item mb-4 mb-lg-0">
                <div className="price-header">
                  <span className="h4">Professional Plan</span>
                  <img src={icon_3} alt="" className="img-fluid"/>
                  <h2>39$</h2>
                </div>
                <div className="price-features">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check"></i>Real-time Live Sharing</li>
                    <li><i className="fas fa-check"></i>Team Collaboration</li>
                    <li><i className="fas fa-check"></i>Create and design responsive </li>
                    <li><i className="fas fa-check"></i>Full Security</li>
                    <li><i className="fas fa-check"></i>Poweful admin panel</li>
                    <li><i className="fas fa-check"></i>24 hours support</li>
                  </ul>
                </div>

                <Link to="home" className="btn btn-main-2">Purchase now</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item">
                <div className="price-header">
                  <span className="h4">Premium Plan</span>
                  <img src={icon_2} alt="" className="img-fluid"/>
                  <h2>49$</h2>
                </div>
                <div className="price-features">
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check"></i>Real-time Live Sharing</li>
                    <li><i className="fas fa-check"></i>Team Collaboration</li>
                    <li><i className="fas fa-check"></i>Create and design responsive </li>
                    <li><i className="fas fa-check"></i>Full Security</li>
                    <li><i className="fas fa-check"></i>Poweful admin panel</li>
                    <li><i className="fas fa-check"></i>24 hours support</li>
                  </ul>
                </div>
                <Link to="home" className="btn btn-main-2">Purchase now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end price */}
      {/* start latest-blog */}
      <section className="section latest-blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="heading text-center">
                <span className="text-color">News article</span>
                <h2>Our blog article to get good idea about marketing</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="blog-item mb-5 mb-lg-0">
                <img src={post_2} alt="" className="img-fluid"/>
                <div className="blog-item-content">
                  <div className="post-meta mt-2">
                    <span>january 20,2019</span>
                    <span>//</span>
                    <Link to="#" className="post-cat">Marketing</Link>
                  </div>
                  <h3 className="mt-3 mb-3"><Link to="blog-single.html">Top Best Strategy to be ahead your journey </Link></h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="blog-item mb-5 mb-lg-0">
                <img src={post_1} alt="" className="img-fluid"/>
                <div className="blog-item-content">
                  <div className="post-meta mt-2">
                    <span>january 20,2019</span>
                    <span>//</span>
                    <Link to="#" className="post-cat">Marketing</Link>
                  </div>
                  <h3 className="mt-3 mb-3"><Link to="blog-single.html">Simple Ways To Optimize Your Website For SEO </Link></h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="blog-item mb-5 mb-lg-0">
                <img src={post_3} alt="" className="img-fluid"/>
                <div className="blog-item-content">
                  <div className="post-meta mt-2">
                    <span>january 20,2019</span>
                    <span>//</span>
                    <Link to="#" className="post-cat">Marketing</Link>
                  </div>
                  <h3 className="mt-3 mb-3"><Link to="blog-single.html">Basics of Blogging Search Engine Optimization</Link></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end latest-blog */}
    </>
  )
}
