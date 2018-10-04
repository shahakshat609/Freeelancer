import React, {Component} from 'react';
import {Link,withRouter,Route} from 'react-router-dom';
import Image from'../images/1.jpg';
import Image1 from'../images/2.png';
import Image2 from'../images/3.jpg';
class Landing_Middle_content extends Component{
render()
{
    return(
        <div>
        <div className="text-center top">

<h2>Crowd Favourites</h2>

<h2>Here are some of our most popular projects:</h2>

    </div>
    <br/>
    <br/>

<div>

    <div className="row "> 
  <div className="col-md-3">
    <img src={Image} height="150" width="300"></img>
    <img src={Image1}height="150" width="300"></img>
    
    
    
  </div>
  <div className="col-md-3">
   <img src={Image} height="150" width="300"></img>
    <img src={Image1}height="150" width="300"></img>
    
    
    
  </div> 
   <div className="col-md-3">
   <img src={Image} height="150" width="300"></img>
    <img src={Image1}height="150" width="300"></img>
    
    
    
  </div> 
  </div>

  <br/>
  <br/>
  <br/>
  
    <div className="text-center ">

<h2>Hire expert freelancers for any job, online</h2>

    </div>
              <h1><font color="dodgerblue"></font></h1> 
              <br/>
              <button  className="btn btn-outline-primary" onClick={() => {
                        window.location.href="http://localhost:3001/postproject";
                            
                        }}>
                            I want to Hire
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <button className="btn btn-outline-primary" onClick={() => {
                            window.location.href="http://localhost:3001/login";
                            
                        }}>
                        I want to Work
                        </button>  
              </div>
    </div>



    )
    
}
}
export default Landing_Middle_content;