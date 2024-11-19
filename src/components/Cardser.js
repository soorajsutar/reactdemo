import React from 'react'
import webd from "../assets/webd.jpg"
import appd from "../assets/appd.jpg"
import ui from "../assets/ui.jpg"

const Cardser = () => {
  return (
    <div>
        {/* 1st card */}
        <div className="card mb-2" > 
    <h1 className="card-title">Our Quality Services</h1>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={webd}className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
            <h2>Web Design and Development</h2>
          
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
        </div>
      </div>
    </div>
  </div>
  {/* 2nd card */}
  <div className="card mb-2" > 
    <div className="row g-0">
      <div className="col-md-4">
        <img src={appd}className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
            <h2>Mobile App Development</h2>
          
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
        </div>
      </div>
    </div>
  </div>
  {/* 3rd card */}

  <div className="card mb-2" > 
    <div className="row g-0">
      <div className="col-md-4">
        <img src={ui}className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
            <h2>UI/UX Design</h2>
          
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
        </div>
      </div>
    </div>
  </div>
  <div className="text-warning">
    <h1 className="display-2 mx-5">Let's Work Together!</h1>
    <button className="btn btn-warning mx-5 mb-2">Connect</button>
  </div>


    </div>
  )
}

export default Cardser
