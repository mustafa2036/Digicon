import React from 'react'
import './Style/Allstyle.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
    <section className="page-title">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="block">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item"> <Link to="/home">Home</Link>  </li>
                    <li className="list-inline-item">/</li>
                    <li className="list-inline-item"> 404 </li>
                </ul>
                <h1>Not Found Page</h1>
                </div>
            </div>
            </div>
        </div>
	</section>
    </>
  )
}
