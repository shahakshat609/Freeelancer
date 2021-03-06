import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from './download.png';

class Navbar_Welcome extends Component {
  static propTypes = {
    logout:PropTypes.func.isRequired 
};

  state = {
    rowData : [],
    username : this.props.username,
    email_address: this.props.email_address
};

componentWillMount(){
    
    //call API to get project
    //set response of API to any state variable
    this.setState({
        username : localStorage.getItem('username'),
        email_address: localStorage.getItem('email_address')
       
    });
    //document.title = `Welcome, ${this.state.username} !!`;
}

    

    render() {
        return (
            <nav className="navbar navbar-light">

  <a className="navbar-brand" href="http://52.53.235.37:3001/"><img src={Image}height ='36' width='145'></img></a>

  
  <ul className="list-inline">
    <li className="list-inline-item">
    <a className="nav-link" href="http://52.53.235.37:3001/profile">Profile</a>
    </li>
    <li className="list-inline-item">
      <a className="nav-link" href="http://52.53.235.37:3001/browseprojects">Browse Projects</a>
    </li>
    <li className="list-inline-item">
      <a className="nav-link" href="http://52.53.235.37:3001/postproject">Post Project</a>
    </li>
    <li className="list-inline-item">
      <a className="nav-link" href="http://52.53.235.37:3001/welcome">My Projects</a>
    </li>
    
    <li className="list-inline-item">
      <a className="nav-link" href="http://52.53.235.37:3001/assignedprojects">Assigned Projects</a>
    </li>
    <li className="list-inline-item">
      <a className="nav-link" href="http://52.53.235.37:3001/account">Account</a>
    </li>
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   
    
    
    <li className="list-inline-item">
    <button type="button" className="btn btn-primary"
               onClick={() => this.props.logout(this.state)}
                >Logout</button>
    </li>
  </ul>
</nav>

  


        );
    }
}

export default Navbar_Welcome;