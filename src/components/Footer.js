import React from 'react'
import jlogo from "../assets/onlylogo.jpg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="cantainer text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 small">
            <h6 className="text-uppercase mb-4 font-weight-bold text-warning "><img src={jlogo}/> <br/> sirstaa Lab (OPC) Private LImited.pune<br/></h6>
            <p>Address <br/>
            B301, 3rd Floor, Royal Cataleya, Opp. Ganesh 
            Lawns, Kiwale, Upper Ravet, Pune - 412101
            </p>
            <div >
              <i className="bi bi-facebook s-4 m-2"></i>
              <i className="bi bi-twitter s-4 m-2"></i>
              <i className="bi bi-linkedin s-4 m-2"></i>
              <i className="bi bi-instagram s-4 m-2"></i>
              <i className="bi bi-whatsapp s-4 m-2"></i>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 small">
            <h6 className="text-uppercase mb-4 font-weight-bold text-warning text-white">Important Links</h6>
            <p><a href="/Service" className="text-white text-decoration-none" >Service</a></p>
              <p><Link to="/Work" className="text-white text-decoration-none" >Work</Link></p>
              <p><Link to="#" className="text-white text-decoration-none" >Our Value</Link></p>
              <p><Link to="/About" className="text-white text-decoration-none" >About Us</Link></p>
              <p><Link to="/Contact" className="text-white text-decoration-none" >Contact</Link></p>
            
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 small">
          <h6 className="text-uppercase mb-4 font-weight-bold text-warning text-white ">Services</h6>
              <p><Link href="/Service" className="text-white text-decoration-none " >Web Design and Lunch</Link></p>
              <p><Link to="#" className="text-white text-decoration-none" >Web Development</Link></p>
              <p><Link to="#" className="text-white text-decoration-none" ><b>Other links</b></Link></p>
              <p><Link to="#" className="text-white text-decoration-none">Privacy Policy</Link></p>
          </div>
          <div className="col-md-11 col-lg-12">
            <p className="text-small">Copyright 2023 Gangodak WaterCure Pvt ltd. | Disclaimer</p></div>         
        </div>
      </div>
    </footer>
  )
}

export default Footer
