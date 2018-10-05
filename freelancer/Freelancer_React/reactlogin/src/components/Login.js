import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link,withRouter} from 'react-router-dom';
import Image from './download.png';
import Image1 from './image.jpg';

import '../css/Login.css'
import Navbar from './Navbar';
class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired     //why is this piece of code???
    };

    state = {
        email_address: '',
        username:'',
        password: ''
    };

    componentWillMount(){
        this.setState({
            email_address: '', 
            username:'',              //It is mounted before render method but what is the main usage?
            password: ''
        });
    }

    render() {
        
        return (
            
            <div className="row justify-content-md-center col-md-12">

           
            
                <div>
                    <form>
                         
                        <div id="login-column" className="col-md-12">
                        
                <div className="box">
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"></div>
                    <div className="shape4"></div>
                    <div className="shape5"></div>
                    <div className="shape6"></div>
                    <div className="shape7"></div>
                    <div className="float">
                        <form className="form" action="">
                            <div className="form-group">
                                <label for="username" class="text-white">Username:</label><br/>
                                <input
                                className="form-control"
                                type="text"
                                label="Username"
                               
                                value={this.state.email_address}
                                onChange={(event) => {      //setState is to change the state on some input
                                    this.setState({
                                        email_address: event.target.value
                                    });
                                }}
                                
                            ></input>
                            </div>
                            <div className="form-group">
                                <label for="password" class="text-white">Password:</label><br/>
                                <input
                                className="form-control"
                                type="password"
                                label="password"
                                value={this.state.password}
                                onChange={(event) => {          //setState is to change the state on some input
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            ></input>
                            </div>
                            <div className="form-group">
                            <button
                                className="btn btn-success"
                                type="button"
                                onClick={() => this.props.handleSubmit(this.state)}  //since this is child to NewerHomePage
                                                                                     //it cannot change state directly so using
                                                                                     //props to pass it to main class(NeweHomePage)
                                                                                     //onclick will pass the current state to main class
                                
                                >  
                                Login
                            </button>
                            &nbsp; &nbsp; &nbsp;
                            <br/>
                           
                            </div>
                        </form>
                    </div>
                    </div>
                    
                        
                       
                               
                      
                            
                        
                    
                </div>
                </form> 
                </div>

                <br/>
                

                
           
            </div>
        );
    }
}

export default Login;