import React from 'react'
import exp from "../assets/exp.jpg"
import erp from "../assets/erp.jpg"

const Cardw = () => {
  return (
    <div>
 
    <div className="card mb-2" > 
    <div className="row g-0">
      <div className="col-md-4">
        <img src={exp}className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
        <h1 className="card-title">Express Cart</h1>
            <h3 >On-Demand E-commerce App Development Company</h3>
        <p>Edhaas Visuals, as the best e-commerce mobile app development 
company, builds mighty on-demand e-commerce applications to 
mobilize your business. We excel in e-commerce application 
development. Our solutions fulfill customer requirements and gratify 
users with world-class user experience.</p>
        </div>
      </div>
    </div>
  </div>
  {/* 2nd card */}
  <div className="card mb-2" > 
  <h1 className="card-title">ERP Software</h1>
  <div className="row g-0">
    
    <div className="col-md-8">
      <div className="card-body">
      <h3 className="card-title">ERP WebApp Development</h3>

<p>Edhaas Visuals, as the best e-commerce mobile app development 
company, builds mighty on-demand e-commerce applications to 
mobilize your business. We excel in e-commerce application 
development. Our solutions fulfill customer requirements and gratify 
users with world-class user experience.</p>
      </div>
    </div>
    <div className="col-md-4">
      <img src={erp}className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
{/* 3rd card */}
<div className="card mb-2" > 
  <h1 className="card-title">Work</h1>
  <div className="row g-0">
    
    <div className="col-md-8">
      <div className="card-body">
      <h3 className="card-title">On-Demand E-commerce App Development Company</h3>
<p>Edhaas Visuals, as the best e-commerce mobile app development 
company, builds mighty on-demand e-commerce applications to 
mobilize your business. We excel in e-commerce application 
development. Our solutions fulfill customer requirements and gratify 
users with world-class user experience.</p>
      </div>
    </div>
    <div className="col-md-4">
      <img src={exp}className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
{/* 4th */}
<div className="card mb-2" > 
    <div className="row g-0">
      <div className="col-md-4">
        <img src={exp}className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
        <h1 className="card-title">ERP Software</h1>
        <h3 className="card-title">ERP WebApp Development </h3>
        <p>Edhaas Visuals, as the best e-commerce mobile app development 
company, builds mighty on-demand e-commerce applications to 
mobilize your business. We excel in e-commerce application 
development. Our solutions fulfill customer requirements and gratify 
users with world-class user experience.</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Cardw
