import React from "react";
import {  Link } from "react-router-dom";
import'./Navbar.css'
import unknown from '../images/Unknown.jpg'
function Navbar() {
    return (

    
        <>
        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
          <div className="container-fluid">
            <Link  className="navbar-brand"to="/">La belle</Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/Services">Services</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                </li>
              </ul>
            </div>
                <div className="fluid">
                  <ul>
                    <li class="nav-item dropstart">
                  <img id="imgAccount" src={unknown} alt="" className="nav-item dropdown" type="button"data-bs-toggle="dropdown" aria-expanded="false"/>
                  <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/Login">Login</Link>
                  <Link className="dropdown-item"to="/Register">Register</Link>
          </ul>
          </li>
          </ul>
          </div>
          </div>
        </nav>
        </>
    );


}
export default Navbar;
