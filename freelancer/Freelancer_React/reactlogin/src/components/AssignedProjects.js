import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import Navbar_Welcome from './Navbar_Welcome';
import Bids from './Bids';
import '../App.css';

class AssignedProjects extends Component {

    
    static propTypes = {
        handleSubmit4: PropTypes.func.isRequired , 
        projectsubmit12:  PropTypes.func.isRequired,
        get2projects: PropTypes.func.isRequired,
        projectsubmit:  PropTypes.func.isRequired//why is this piece of code???
    };
   

    
    state = {
        result:[],
        projname:[],
        projdetails:[],
        xyz:'',
        relevantprojects:false,
        
        
        image:this.props.image,
        username : this.props.username,
        email_address: this.props.email_address
    };

    componentWillMount(){
        console.log("in browseprojects");
        
        API.getAssignedProjects()
        .then(data=>{
            console.log(data);  //result received
            this.state.result=data;
            console.log(this.state.result); //assigned to an array in state
            console.log(this.state.result.length); //found the length of the 
            this.setState({
                result:data
       });
            
            //console.log(this.state.proj_name);
            //console.log(data);
            //console.log(data[0]);
            //console.log(data[1]);
    
        console.log(this.state.result);
    });
        API.getProfileImage()
        .then(result=>{
           
        }
        );
                            

        this.setState({
            
            //res.data
            username : localStorage.getItem('username'),
            email_address: localStorage.getItem('email_address'),
            image:localStorage.getItem('image')
           
        });
        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
        document.title = `Welcome, ${this.state.email_address} !!`;
    }


    render(){
        const projectNode=this.state.result.map((project,index)=>{
         return(
                <tr key={index+1}>
                <td className="text-left">{index+1}</td>
                
                <td className="text-left">{project.proj_name}</td>
                <td className="text-left">{project.employer}</td>
                <td className="text-left">{project.bid_days}</td>
                <td className="text-left">{project.bid_amt}</td>
                
                
                <td className="text-left"><button id={project._id}className="btn btn-success"
                
                onClick={() => this.props.projectsubmit12(project.proj_id)}>Detailed View</button></td>
                
                
                
                </tr>
                

         )
          });
        return(
            
             
            <div>
                <div className="container-fluid ">
                    
                    
                    
                    <br/><br/>
                    <br/>
<div >
<h3 className="mr-0"> Assigned Projects Details</h3>
<br/>



<table className="table table-hover">
<thead>
    <tr>
        <th>#</th>
        
        <th>Project Name</th>
        <th>Employer</th>
        <th>No.of Days</th>
        <th>Amount you had bid</th>
        
        <th></th>
</tr>
    </thead>
    <tbody>
        {projectNode}
        
        </tbody>

        
    </table>
    </div> 

<br/>
<br/>

                    <br/>
                    
                </div>
               
               
            </div>
            
        )
    }
}

export default withRouter(AssignedProjects);