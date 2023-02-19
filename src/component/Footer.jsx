import React from 'react'
import logo_white from './Images/logo-white.png';
import './Style/Allstyle.css';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-md-6" data-aos="fade-up" data-aos-duration="3000">
                    <div className="widget footer-widget mb-5 mb-lg-0">
                        <img src={logo_white} alt="Digicon" className="img-fluid"/>
                        <p className="mt-3">Veniam Sequi molestias aut necessitatibus optio 
                        magni at natus accusamus .</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6" data-aos="fade-up" data-aos-duration="3000">
                    <div className="widget footer-widget mb-5 mb-lg-0">
                        <h5 className="widget-title">Location</h5>
                        <p>Moon Street Light Avenue, 14/05 <br/>Jupiter, JP 80630 </p>
                        <ul className="list-unstyled">
                            <li>E : info@yourdomain.com</li>
                            <li>P : (68) 345 5902</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-6 col-md-6" data-aos="fade-up" data-aos-duration="3000">
                    <div className="widget footer-widget mb-5 mb-lg-0">
                        <h5 className="widget-title">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="about">About us</Link></li>
                            <li><Link to="contact">Contact us</Link></li>
                            <li><Link to="home">Projects</Link></li>
                            <li><Link to="contact">Terms & Condition</Link></li>
                            <li><Link to="blog">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6" data-aos="fade-up" data-aos-duration="3000">
                    <div className="widget footer-widget mb-5 mb-lg-0">
                        <h5 className="widget-title">Subscribe</h5>
                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        <form action="#" className="subs-form">
                            <input type="text" className="form-control" placeholder="Email Address"/>
                            <Link to="#" className="btn btn-main-2 btn-sm">Subscribe</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div className="footer-btm">
        <div className="container">
            <div className="row">
                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="3000">
                    <div className="copyright">
                        <p>@ Copyright reserved to <Link to="home">Digicon.</Link></p>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                    <ul className="list-inline footer-socials text-lg-right mb-0">
                        <li className="list-inline-item">
                            <Link to="home"> <i className="fab fa-facebook-f"></i>Facebook</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="home"> <i className="fab fa-twitter"></i>Twitter</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="home"> <i className="fab fa-pinterest"></i> Pinterest</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="home"> <i className="fab fa-linkedin"></i>Linkedin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
