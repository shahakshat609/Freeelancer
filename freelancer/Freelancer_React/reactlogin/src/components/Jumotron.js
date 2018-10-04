import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from'./slider.jpg';
import {Link,withRouter,Route} from 'react-router-dom';
import Login from'./Login';
import Image2 from'./axt_profile.JPG';
//import { Route, withRouter } from 'react-router-dom';
import Image1 from'./image1.jpg';
import '../css/Landing.css';
class Jumbotron extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
            <div className="jumbotron-fluid">
              
              <div id="carouselExampleIndicators" className="carousel slide" >
  

  <div className="carousel-inner">
    <div className="item active">
      <img className="d-block w-100" src={Image} height="400" width="700"alt="First slide"></img>
      <div className="container">
            <div className="carousel-caption">
              <h1>CrowdSourcing Platform.</h1>
              <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <br/>
              <a className="btn btn-large btn-primary" href="http://localhost:3001/signup">Sign up today</a>
            </div>
          </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-150" src={Image1}  height="450" width="1000"alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Image2} height="350" width="1000" alt="Third slide"></img>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>




              {/* <img src={Image} height="400" width="1000"alt="dint load"></img> */}
              <div className="text-center top">

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
              
            
           
                
             
        );
    }
}

export default Jumbotron;