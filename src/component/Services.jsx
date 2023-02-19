import React from 'react'
import './Style/Allstyle.css';
import social_media from './Images/svg/002-social-media.svg';
import data from './Images/svg/006-data.svg';
import notepad from './Images/svg/001-notepad.svg';
import digital_marketing_1 from './Images/svg/009-digital-marketing-1.svg';
import digital_marketing_5 from './Images/svg/005-social-campaign.svg';
import blog from './Images/svg/007-blog.svg';
import clients from './Images/bg/clients_img_02.png';
import client_1 from './Images/clients/client1.png';
import client_2 from './Images/clients/client2.png';
import client_3 from './Images/clients/client3.png';
import client_4 from './Images/clients/client4.png';


import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
    {/* start header_services */}
    <section className="page-title">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="block">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                    <Link to="/home">Home</Link>
                    </li>
                    <li className="list-inline-item">/</li>
                    <li className="list-inline-item">
                        Service
                    </li>
                </ul>
                <h1>Service</h1>
                </div>
            </div>
            </div>
        </div>
    </section>
    {/* end header_services */}
    {/* start service */}
    <section className="section service">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="heading text-center">
                        <span className="text-color">Our Services</span>
                        <h2>We Love to Help Your Perfect SEO Business</h2>
                    </div>
                </div>
            </div>

            <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                    <div className="service-block">
                        <img src={social_media} alt="" className="img-fluid"/>
                        <h4>Social Media Optimization</h4>
                        <p>Eaque velit, maiores maxime iure odit voluptates autem, totam voluptatibus rem quisquam quasi.</p>
                        <span className="number">01</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-block">
                        <img src={data} alt="" className="img-fluid"/>
                        <h4>Pey Per Click</h4>
                        <p>Eaque velit, maiores maxime iure odit voluptates autem, totam voluptatibus rem quisquam quasi.</p>
                        <span className="number">02</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-block">
                        <img src={notepad} alt="" className="img-fluid"/>
                        <h4>Content Marketing</h4>
                        <p>Eaque velit, maiores maxime iure odit voluptates autem, totam voluptatibus rem quisquam quasi.</p>
                        <span className="number">03</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-block">
                        <img src={digital_marketing_1} alt="" className="img-fluid"/>
                        <h4>SEO Services</h4>
                        <p>Eaque velit, maiores maxime iure odit voluptates autem, totam voluptatibus rem quisquam quasi.</p>
                        <span className="number">04</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-block">
                        <img src={digital_marketing_5} alt="" className="img-fluid"/>
                        <h4>Email Marketing</h4>
                        <p>Eaque velit, maiores maxime iure odit voluptates autem, totam voluptatibus rem quisquam quasi.</p>
                        <span className="number">05</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-block">
                        <img src={blog} alt="" className="img-fluid"/>
                        <h4>Web Development</h4>
                        <p>Eaque velit, maiores maxime iure odit voluptates autem, totam voluptatibus rem quisquam quasi.</p>
                        <span className="number">06</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* end service */}
    <section className="section bg-grey cta">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="cta-content text-center">
                        <span className="text-color">Get Consultant</span>
                        <h2 className="mt-3 mb-4 ">Want to get your site optimized and ranked in google?</h2>
                        <Link to="/contact" className="btn btn-main-2">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* testimonial*/}
    <section className="testimonial section">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-6">
				<div className="heading text-center">
					<span className="text-color">Love from Clients</span>
					<h2>Honest Reviews from clients working expeirnece with us</h2>
				</div>
			</div>
		</div>
		<div className="test-img">
			<div className="row">
				<div className="col-lg-7 testimonial-slider">
					<div className="testimonial-item">
						<div className="d-flex">
							<div className="rating">
								<Link to=""><i className="ti-star"></i></Link>
								<Link to=""><i className="ti-star"></i></Link>
								<Link to=""><i className="ti-star"></i></Link>
								<Link to=""><i className="ti-star"></i></Link>
								<Link to=""><i className="ti-star"></i></Link>
							</div>
							<div className="quote-icon"><i className="ti-quote-right"></i></div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque velit, nostrum optio autem in quisquam nemo ipsa qui, doloremque provident </p>
						<div className="testimonial-footer d-flex align-items-center">
							<div className="client-author-img mr-4">
								<img src={clients} alt="client-test-img" 
                                className="img-fluid"/>
							</div>
							<div className="client-info">
								<h4 className="mb-0">Bryan Tracy</h4>
								<p>Developer</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </section>
    <section className="section-sm clients">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="client-img mb-5 mb-lg-0 text-center">
                        <img src={client_1} alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="client-img mb-5 mb-lg-0 text-center">
                        <img src={client_2} alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="client-img mb-5 mb-lg-0 text-center">
                        <img src={client_3} alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="client-img text-center">
                        <img src={client_4} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}