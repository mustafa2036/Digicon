import React from 'react'
import './Style/Allstyle.css';
import Logo_dark from './Images/logo-dark.png';
import { Link } from 'react-router-dom';
import $ from 'jquery'

export default function Header() {
    $(window).scroll(function () {
        let window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
          $('.main_menu').addClass('menu_fixed animated fadeInDown');
        } else {
          $('.main_menu').removeClass('menu_fixed animated fadeInDown');
        }
    });
    return (
    <>
    <div className="main-navigation main_menu " id="mainmenu-area">
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="home">
                    <img src={Logo_dark} alt="Digicon" className="img-fluid"/>
                </Link>
                {/* <!-- Toggler --> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="fas fa-bars"></span>
                </button>

                {/* <!-- Collapse --> */}
                <div className="collapse navbar-collapse ms-auto" id="navbarCollapse">
                    {/* <!-- Links --> */}
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link to="home" className="nav-link js-scroll-trigger">
                               Home
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="about" className="nav-link js-scroll-trigger">
                                About
                            </Link>
                        </li>

                        <li className="nav-item ">
                            <Link to="services" className="nav-link js-scroll-trigger">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                         <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="blog">
                                Blog
                            </Link>
                        </li>
                    </ul>

                     <ul className="list-inline header-contact float-lg-right">
                        <li className="list-inline-item">
                           <Link to="home" className="btn btn-solid-border btn-sm mb-lg-0 mb-2"><i className="ti-headphone-alt mr-2"></i>45-378-9800</Link>
                        </li>  
                        <li className="list-inline-item">
                        	<Link to="contact" className="btn btn-main-2 btn-sm">Free analysis</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    </>
  )
}
