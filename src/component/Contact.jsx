import React from 'react'
import './Style/Allstyle.css';
import { Link } from 'react-router-dom';
export default function Contact() {
  return (
    <>
    {/* start header_services */}
    <section className="page-title">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="block">
                
                <ul className="list-inline">
                    <li className="list-inline-item">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="list-inline-item">/</li>
                    <li className="list-inline-item">
                        Contact
                    </li>
                </ul>
                <h1>Contact</h1>
                </div>
            </div>
            </div>
        </div>
    </section>
    {/* end header_services */}
    <section className="contact-info-wrap">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-6 col-md-4">
                    <div className="contact-info">
                        <i className="fas fa-envelope"></i>
                        <h4>E-mail</h4>
                        <p>Support@company.com</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4">
                    <div className="contact-info">
                        <i className="fas fa-mobile"></i>
                        <h4>Phone</h4>
                        <p>+30 356 3778 241 </p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-4">
                    <div className="contact-info">
                        <i className="fas fa-location-pin"></i>
                        <h4>Address</h4>
                        <p>Level 14, 388 George Street New York 200</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="contact-form section">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-lg-12 col-md-12">
                    <div class="contact_form">
                        <h3>Give a Message</h3>
                        <p className="mt-3 mb-4">Voluptatum eveniet modi nihil quo delectus officia, 
                        vel, explicabo earum aliquid corporis, doloremque consequatur repellendus dolores.
                        </p>

                        <div className="form-group">
                            <input name="user_name" id="user_name" type="text" 
                            className="form-control" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <input name="user_email" id="user_email" type="email" 
                            className="form-control" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <input name="user_subject" id="user_subject" type="text" 
                            className="form-control" placeholder="Topic Subject"/>
                        </div>
                        <div className="form-group">
                            <textarea name="user_message" id="user_message" className="form-control" 
                            rows="6" placeholder="Your Message"></textarea>
                        </div>
                        <input className="btn btn-main" value="Send Message"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
