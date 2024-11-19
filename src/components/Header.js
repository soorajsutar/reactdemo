import React from 'react'
import logo from "../assets/logo.jpg";
import "../Style/header.css"
import { Link } from 'react-router-dom';

export default function header() {
  return (   
    
    <div class="background">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <img src={logo}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Service">Service</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Work">Work</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">Contact</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
        <div class="info-box">
            <h1>Sristaa Labs</h1>
            <h2>Experience the optimal solutions</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Amet lacinia ultricies malesuada fermentum viverra id sed eget massa. Suspendisse morbi 
                dictum massa ante. Sapien metus at nisl eu sit vestibulum magnis. Pellentesque ultricies convallis sit egestas diam ipsum 
                pellentesque venenatis</p>
                <button class="send-enquiry-btn">Send Enquiry</button>
        </div>
    </div>

  )
}
