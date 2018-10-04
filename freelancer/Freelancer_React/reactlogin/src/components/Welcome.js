import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import Navbar_Welcome from './Navbar_Welcome';
import '../App.css';
import '../css/Welcome.css';

class Welcome extends Component {

    
    static propTypes = {
        handleSubmit4: PropTypes.func.isRequired ,
        projectsubmit1:  PropTypes.func.isRequired    //why is this piece of code???
    };
   

    
    state = {
        result:[],
        relevantproj:[],
        projname:[],
        projdetails:[],
        xyz:'',
        bids:[],
        
        
        
        image:this.props.image,
        name : this.props.name,
        email: this.props.email
    };

    componentWillMount(){
        
        API.getselfProjects(this.state)
        .then(data=>{
            console.log(data);  //result received
            this.state.result=data;
            console.log(this.state.result); //assigned to an array in state
            console.log(this.state.result.length); //found the length of the 
            this.setState({
                result:data
       });
    
        console.log(this.state.result);
    });

    API.getbids()
    .then(data=>
        {
        console.log(data);  //result received
        this.state.bids=data;
        console.log(this.state.bids); //assigned to an array in state
        console.log(this.state.bids.length); //found the length of the 
        this.setState({
            bids:data
   });

    console.log(this.state.bids);
});
   
   // API.getRelevantProjects()
  //  .then(data=>{
   //     console.log(data);  //result received
   //     this.state.relevantproj=data;
   //     console.log(this.state.relevantproj); //assigned to an array in state
   //     console.log(this.state.relevantproj.length); //found the length of the 
   //     this.setState({
   //         relevantproj:data
  // });

  //  console.log(this.state.result);
//});


    
        API.getProfileImage()
        .then(result=>{
           
        }
        );
                            

        this.setState({
            
            //res.data
            name : localStorage.getItem('username'),
            email: localStorage.getItem('email_address'),
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
                <td className="text-left">{project.proj_details}</td>
                <td className="text-left">{project.pay}</td>
                <td className="text-left">{project.status}</td>
                <td className="text-left"><button id={project._id}className="btn btn-outline-primary"
                
                onClick={() => this.props.projectsubmit1(project._id)}>Detailed View</button></td>
                </tr>
                

         )
          });

          const projectBids=this.state.bids.map((bids,index)=>{
            return(
                   <tr key={index+1}>
                   <td className="text-left">{index+1}</td>
                   <td className="text-left">{bids.proj_id}</td>
                   <td className="text-left">{bids.bid_amt}</td>
                   <td className="text-left">{bids.bid_days}</td>
                   
                   </tr>
                   
   
            )
             });
        return(
            
             
            <div>
                <div className="container-fluid ">
                    
                    <br/>
                    <br/>
                    
                    

<div>
<h2 className="mr-0"><b>Project Details</b></h2>
<br/>
<br/>
<div className="container">
    <br/>
	<div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            
                                <form className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                    
                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords"/>
                                    </div>
                                   
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-primary" 
                                        type="button"
                                        onClick={() => this.props.handleSubmit4(this.state)}>Search</button>
                                    </div>
                                   
                                
                            </form>
                        </div>
                       
                    </div>
</div>
<table className="table table-hover">
<thead>
    <tr>
        <th>Sr No.</th>
        
        <th>Project Name</th>
        <th>Project Details</th>
        <th>Payment method</th>
        <th>Status</th>
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
                    <div className="d-lg-none">
                        <br/>
                        <h4>Your Bids</h4>
                        <table className="table table-hover">
<thead>
    <tr>
        <th>#</th>
        <th>Project ID</th>
        <th>Bid Amount</th>
        <th>Bid Days</th>
       
</tr>
    </thead>
    <tbody>
        {projectBids}
        </tbody>

        
    </table>


                        </div>
                    
                </div>
               
            </div>
            
        )
    }
}

export default withRouter(Welcome);