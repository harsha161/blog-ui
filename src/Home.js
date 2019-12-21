import React from'react';
import{Link} from 'react-router-dom'

class Home extends React.Component{
    constructor(){
        super()
        this.state={
            users:""
        }
    }
    render(){
        return(
            
            <div>
            <br/>
            <img src={process.env.PUBLIC_URL+"/images/h.jpg"} width="100%" height="600px" className="d-block w-100" alt=""></img>
            <br/>
            <br/>
<div class="row">
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">FULL DETAILS OF USERS</h5>
        <p class="card-text">with the usage of the users the show the datails of the users information kindly click below button for directly going to the user page and details.</p>
        <button><Link to='/Users'>GO TO USERS</Link></button> 
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">FULL DETAILS OF THE POSTS</h5>
        <p class="card-text">full details of the posts and the give the information aboiut the posts by clicking the below the button u can go to the post page directly.</p>
        <button><Link to='/Posts'>GO TO POSTS</Link></button> 
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Contact Information</h5>
        <p class="card-text">the details of the contacts information has been showed here please click below button for the information related to the contacts.</p>
        <button><Link to='/Contact'>GO TO CONTACTS</Link></button> 
      </div>
    </div>
  </div>
</div>

</div>


   )
    }
}
        
        
  

export default Home