import React from 'react';

import UserShow from './UserShow';
import Home from './Home';
import Contact from './Contact';
import UserList from './UserList';
import PostsList from './PostsList';
import PostShow from './PostShow';

//redux
import{connect} from 'react-redux'
import {increment, decrement,reset} from'./action/count'




import {BrowserRouter,Route,Link} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <h1>{props.count}</h1>
    <button onCLick={()=>{props.dispatch(increment())}}>up</button>
    <button onCLick={()=>{props.dispatch(decrement())}}>down</button>
    <button onClick={()=>{props.dispatch(reset())}}>reset</button>
  
    
  
      <div className ='container'>
       <nav className="navbar navbar-dark bg-primary">
       <img src={process.env.PUBLIC_URL+"/images/h.jpg"} width="30" height="30" className="d-inline-block align-top" alt=""></img>

       <span ><Link to='/'>
         <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
         BLOG-UI
</button></Link></span> 

         <span ><Link to='/'>
         <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
         Home
</button></Link></span> 
        
         <span><Link to='/Users'><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
         Users
</button></Link></span> 
         <span ><Link to='/Contact'>
         <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
         Contact
</button></Link></span> 
         <span><Link to='/Posts'><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
         Posts
</button></Link></span> 
<form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"> <Link to='/Contact'>Search</Link></button>
  </form>
         </nav>

         <Route path='/' component={Home} exact={true} />
        
        
         <Route path='/Users' component={UserList} exact={true}/>
      
         
         <Route path='/Contact' component={Contact} />

         <Route path='/users/:id' component={UserShow}  />

         <Route path='/Posts' component ={PostsList} />

         <Route path= './Posts/:id' Component={PostShow} />

         
        
      
      </div>
  </BrowserRouter>
  
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}


export default connect(mapStateToProps)(App);
