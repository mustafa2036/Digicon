import React from 'react'
import './Style/Allstyle.css';
import about_Img from './Images/bg/about.jpg';
import about from './Images/bg/about_img.png';
import team_1 from './Images/team/team-1.jpg';
import team_2 from './Images/team/team-2.jpg';
import team_3 from './Images/team/team-3.jpg';
import team_4 from './Images/team/team-4.jpg';

import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
    {/* start header_about */}
    <section className="page-title">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="block">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item"> <Link to="/home">Home</Link>  </li>
                    <li className="list-inline-item">/</li>
                    <li className="list-inline-item"> About </li>
                </ul>
                <h1>About</h1>
                </div>
            </div>
            </div>
        </div>
	</section>
    {/* end header_about */}
    <section className="section-sm feature-2">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-5">
					<div className="about-us">
						<span className="text-color">About us</span>
						<h2 className="mt-2">We are a dynamic team of creatives people of 
                        design & marketing.</h2>
					</div>
				</div>
				<div className="col-lg-7">
					<div className="about-content mt-3 mt-lg-0">
						<p>Steps on how you can increase traffic and sales with optimization, social 
                            media marketingLorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Enim alias excepturi laboriosam sed voluptatibus porro reiciendis voluptate 
                            quas deleniti nisi soluta, nulla ullam tempora, dicta, optio id sit expedita 
                            aliquid.
                        </p>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section className="feature-wrap section">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-sm-6 col-md-6">
					<div className="feature-block mb-5 mb-lg-0 text-center text-lg-left">
						<i className="fas fa-bar-chart"></i>
						<h4>Outstanding & Trending Strategy</h4>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-md-6">
					<div className="feature-block mb-5 mb-lg-0 text-center text-lg-left">
						<i className="fas fa-headset"></i>
						<h4>Expert Team & Quick Support</h4>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-md-6">
					<div className="feature-block mb-5 mb-lg-0 text-center text-lg-left">
						<i className="fas fa-check"></i>
						<h4>Fast & Quick Result Searching</h4>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-md-6">
					<div className="feature-block text-center text-lg-left">
						<i className="fas fa-face-smile"></i>
						<h4>Quality Service in Low Cost</h4>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section className="section process">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-6">
					<div className="process-heading text-center">
						<span className="text-color">Our working Process</span>
						<h2 className="mb-3 mt-2">We love to share our working process</h2>
					</div>
					<div className="row">
						<div className="col-lg-6 col-sm-6">
							<div className="process-item text-center text-lg-left ">
								<i className="fas fa-search"></i>
								<h4>Research Project</h4>
								<p>Repellendus harum amet ipsum, iure earum aliquam .</p>
							</div>
							<div className="process-item text-center text-lg-left">
								<i className="fas fa-gauge-high"></i>
								<h4>Find Ideas</h4>
								<p>Repellendus harum amet ipsum, iure earum aliquam .</p>
							</div>

						</div>
						<div className="col-lg-6 col-sm-6">
							<div className="process-item text-center text-lg-left">
								<i className="fas fa-dashboard"></i>
								<h4>Start Optimize</h4>
								<p>Repellendus harum amet ipsum, iure earum aliquam .</p>
							</div>
							<div className="process-item text-center text-lg-left">
								<i className="fas fa-arrow-up-right-dots"></i>
								<h4>Reach Target</h4>
								<p>Repellendus harum amet ipsum, iure earum aliquam .</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<img src={about_Img} alt="" className="img-fluid w-100"/>
				</div>
			</div>
		</div>
	</section>
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
    {/* start team */}
    <section className="section team">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="heading text-center">
						<span className="text-color">Our Team</span>
						<h2>Expert Team management to make it worthy</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="team-item mb-5 mb-lg-0">
						<div className="team-img">
							<img src={team_1} alt="" className="img-fluid"/>
						</div>

						<div className="team-info">
							<h4>John Morgan</h4>
							<p>Senior Developer</p>
						</div>

						<ul className="list-inline">
							<li className="list-inline-item">
								<Link to=""><i className="fab fa-facebook"></i></Link>
							</li>
							<li className="list-inline-item">
                                <Link to=""><i className="fab fa-twitter"></i></Link>
                            
                        </li>
							<li className="list-inline-item">
                                <Link to=""><i className="fab fa-linkedin"></i></Link>
                            
                        </li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="team-item mb-5 mb-lg-0">
						<div className="team-img">
							<img src={team_2} alt="" className="img-fluid"/>
						</div>

						<div className="team-info">
							<h4>John Morgan</h4>
							<p>Senior Developer</p>
						</div>

						<ul className="list-inline">
							<li className="list-inline-item">
								<Link to=""><i className="fab fa-facebook"></i></Link>
							</li>
							<li className="list-inline-item">
                                <Link to=""><i className="fab fa-twitter"></i></Link>
                            </li>
							<li className="list-inline-item">
                                <Link to=""><i className="fab fa-linkedin"></i></Link>
                            </li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="team-item mb-5 mb-lg-0">
						<div className="team-img">
							<img src={team_3} alt="" className="img-fluid"/>
						</div>

						<div className="team-info">
							<h4>John Morgan</h4>
							<p>Senior Developer</p>
						</div>

						<ul className="list-inline">
							<li className="list-inline-item">
								<Link to=""><i className="fab fa-facebook"></i></Link>
							</li>
							<li className="list-inline-item">
                                <Link to=""><i className="fab fa-twitter"></i></Link>
                            </li>
							<li className="list-inline-item">
                                <Link to=""><i className="fab fa-linkedin"></i></Link>
                            </li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="team-item mb-5 mb-lg-0">
						<div className="team-img">
							<img src={team_4} alt="" className="img-fluid"/>
						</div>

						<div className="team-info">
							<h4>John Morgan</h4>
							<p>Senior Developer</p>
						</div>

						<ul className="list-inline">
							<li className="list-inline-item">
								<Link to=""><i className="fab fa-facebook"></i></Link>
							</li>
							<li className="list-inline-item">
                                <Link to=""><i className="fab fa-twitter"></i></Link>
                            </li>
							<li className="list-inline-item">
                                <Link to=""><i className="fab fa-linkedin"></i></Link>
                            </li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
    {/* end team */}
    </>
  )
}
