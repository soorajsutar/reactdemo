import React from 'react'
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card-2.jpg";



const Cards = () => {
  return (
    <div>
 
    <div className="card mb-2" > 
    <h1 className="card-title">About Sristaa Labs</h1>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={card1}className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          
          <p className="card-text">Lorem ipsum dolor sit amet consectetur. Vehicula porttitor neque imperdiet urna. Phasellus 
morbi fermentum libero venenatis integer. Rhoncus sed vulputate magna purus. Interdum 
suspendisse ipsum interdum arcu enim tellus</p>
<h5>Features</h5>
<ul>
  <li> Lorem ipsum dolor sit amet consectetur</li>
  <li>Lacus commodo elementum morbi in.</li>
  <li>Sed massa lectus sed curabitur.</li>
  <li>Aliquet rhoncus eget aliquam sit morbi</li>
  <li>Massa turpis lorem vitae nunc pellentesque quis dignissim</li>
</ul>
<button type="button" className="btn btn-outline-warning">Know More</button>
        </div>
      </div>
    </div>
  </div>
  {/* 2nd card */}
  <div className="card mb-2" > 
  <h1 className="card-title">Services</h1>
  <div className="row g-0">
    
    <div className="col-md-8">
      <div className="card-body">
      <h2 className="card-title">Services</h2>
        
        <p className="card-text">Interactive, feature-filled, and highly compatible web applications are developed 
        based on your requirements by our of techies.</p>

<ul>
<li>Lorem ipsum dolor sit amet consectetur¯</li>
<li>Lacus commodo elementum morbi in.</li>
<li>Sed massa lectus sed curabitur. </li>

</ul>
<button type="button" className="btn btn-outline-warning">Know More</button>
      </div>
    </div>
    <div className="col-md-4">
      <img src={card2}className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
{/* 3rd card */}
<div className="card mb-2" > 
  <h1 className="card-title">Work</h1>
  <div className="row g-0">
    
    <div className="col-md-8">
      <div className="card-body">
      <h2 className="card-title">applications</h2>
<ul>
<li> Lorem ipsum dolor sit amet consectetur¯</li>
<li>Lacus commodo elementum morbi in.</li>
<li>Sed massa lectus sed curabitur.</li>
<li>Aliquet rhoncus eget aliquam sit morbi¯</li>
<li>Massa turpis lorem vitae nunc pellentesque quis dignissim.</li>
</ul>
<button type="button" className="btn btn-outline-warning">Know More</button>
      </div>
    </div>
    <div className="col-md-4">
      <img src={card2}className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
{/* 4th */}
<div className="card mb-2" > 
    <div className="row g-0">
      <div className="col-md-4">
        <img src={card1}className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
        <h1 className="card-title">Our Values</h1>
        <h4>Features</h4>
  <li>Lorem ipsum dolor sit amet consectetur</li>
  <li>Lacus commodo elementum morbi in.</li>
  <li>Sed massa lectus sed curabitur.</li>
  <li>Aliquet rhoncus eget aliquam sit morbi</li>
  <li> Massa turpis lorem vitae nunc pellentesque quis dignissim.</li>

<button type="button" className="btn btn-outline-warning">Know More</button>
        </div>
      </div>
    </div>
  </div>
  {/* 5th card*/}
 <p className='fs-1 fw-bold text-center'>Vision and Mission</p>
  <div className="card-group">
  <div className="card text-bg-secondary-col bg-gray p-4">
 
    <div className="card-body">
      <h5 className="card-title text-center">Vision</h5>
      <p className="card-text text-center">To encourage the development of high-quality drinking water in order to benefit the environment and public health.</p>
    
    </div>
  </div>
  <div className="card text-bg-secondary-col">
    
    <div className="card-body">
      <h5 className="card-title text-center">Mssion</h5>
      <p className="card-text text-center">To offer the highest-quality, healthiest, and most trustworthy alkaline water treatment products and services, thereby enriching society as a whole..</p>
      
    </div>
  </div>
</div>
</div>
  )
}

export default Cards
