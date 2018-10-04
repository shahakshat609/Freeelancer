import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from './download.png';
import '../App.css'
class Navbar extends Component {

   

    render() {
        return (
            <nav className="navbar navbar-light">

  <a className="navbar-brand" href="http://localhost:3001"><img src={Image} height ='36' width='145'></img></a>

  
  <ul className="list-inline">
  <li className="list-inline-item">
      <a className="nav-link" href="http://localhost:3001/postproject">Post Project</a>
    </li>
    <li className="list-inline-item">
    <a className="nav-link " href="http://localhost:3001/login">Login</a>
    </li>
    <li className="list-inline-item">
      <a className="nav-link" href="http://localhost:3001/signup">Signup</a>
    </li>
   
    

   
   
  </ul>
</nav>

  


        );
    }
}

export default Navbar;