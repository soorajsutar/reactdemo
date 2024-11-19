import React from 'react'

const Form = () => {
  return (
    <div >
   <form class="row g-3 m-4 p-3">
   <h1 className="text-center">Lets Start Conversation</h1>
  <div class="col-md-6">
    
    <label for="text" class="form-label">Full Name</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Enter Your Name"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Enter Your Email"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Company Name</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter Our Company Name"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Subject 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Enter subject Line Here"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Message</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Enter Your Message"/>
  </div>
  <div class="col-12">
  </div>
  <div class="d-grid gap-2 col-2 mx-auto">
  <button class="btn btn-warning" type="button">Send Message</button>
</div>
</form>

  
      
    
    </div>
    
  )
}

export default Form
