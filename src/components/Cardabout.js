import React from 'react'
import card3 from "../assets/card3.jpg";
import "../Style/Cardabout.css"
import card1 from "../assets/card1.jpg"

const Cardabout = () => {
  return (
    <div>
        {/* 1st card */}
        <div className="card mb-4 p-4" > 
    <h1 className="card-title">History of Sristaa Lab</h1>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={card3}className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
            <h1>Year - 2018</h1>
          <br/>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur. Vehicula porttitor neque 
imperdiet urna. Phasellus morbi fermentum libero venenatis integer. 
Rhoncus sed vulputate magna purus. Interdum suspendisse ipsum 
interdum arcu enim tellus</p>
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
   <div className="underline">
   <h1>Vision and Mission</h1>
   </div>
   
   <hr/>
   
   <div class="containers">
    <div class="cards">
      <div class="cards-content">
        <h3>Vision</h3>
        <p>Vision helps us to set goals and strive for progress.</p>
        <p>It guides our decisions and gives us direction in life.</p>
        <p>Without vision, we may lose our focus and purpose.</p>
      </div>
    </div>

    <div class="cards">
      <div class="cards-content">
        <h3>Mission</h3>
        <p>Vision helps us to set goals and strive for progress.</p>
        <p>It guides our decisions and gives us direction in life.</p>
        <p>Without vision, we may lose our focus and purpose.</p>
      </div>
    </div>
  </div>
  {/* 3rd card */}

  <div className="card mb-2" > 
  <h1 className="card-title">1. On- Time Delivery</h1>
  <div className="row g-0">
    
    <div className="col-md-6">
      <div className="card-body">      
        <p className="card-text">Lorem ipsum dolor sit amet consectetur. Vehicula porttitor neque 
imperdiet urna. Phasellus morbi fermentum libero venenatis integer. 
Rhoncus sed vulputate magna purus. Interdum suspendisse ipsum 
interdum arcu enim tellus.</p>
      </div>
    </div>
    <div className="col-md-4">
      <img src={card1}className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
   
    
      
    </div>
  )
}

export default Cardabout
