import React from 'react'

function Contact(props) {
    return (
        <div>
        <div class="card-sm-3">
        <img src={process.env.PUBLIC_URL+"/images/2.jpg"} width="100" height="100" className="d-inline-block align-top" alt=""></img>
        <div class="card-sm-3">
          <h2 class="card-title">Contact Information</h2>
          <p class="card-text"><h2>Name:harshavardhan reddy </h2><br/> <h2>Phone :9912513206</h2><br/> <h2>Email:hharsha303@gmail.com</h2></p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
         </div>
    
        </div>
    )
}
export default Contact