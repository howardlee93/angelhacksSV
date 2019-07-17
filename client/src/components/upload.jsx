//upload.jsx

import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Login from './login';

const labelStyle ={
  form:{
    display:'flex',
    flexDirection:'column',
    flexWrap:'nowrap',
    textAlign: 'left',
    margin:'0 20% 0 20% '
    }
  }

// const url = "http://localhost:4000/";


class Upload extends Component {
  constructor(props) {
    super(props);
    this.state ={
    	success : false,
      	error: false,
      	errorMessage : "",
        person: "",
        location:"",
        time: "",
        authenticated: false,


    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.onAuthentication = this.onAuthentication.bind(this);
  }


  onAuthentication(){
  	
    !this.state.authenticated?
    this.setState({
  		authenticated: true,

  	})
    :this.setState({
      authenticated: false,

    });
  }

  handleChange(e){
  	this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  handleUpload(e){
  	console.log(this.state);


    e.preventDefault();
        
    axios.post( "/upload",  this.state)
            .then((response) => {
                alert("The file is successfully uploaded");
               	this.setState({success: true});
               	console.log(this.state.success);
                console.log(response);
                

            }).catch((error) => {
            	this.setState({success: false});
                console.log(error);
        });

  }
 

  render() {

    const SuccessMessage = () => ( 
        <div style={{padding:50}}>  
        <h3 style={{color: 'green'}}>SUCCESSFUL UPLOAD</h3> 
        <br/> 
      </div>  
    ) 
       
    const ErrorMessage = () => (  
      <div style={{padding:50}}>  
        <h3 style={{color: 'red'}}>FAILED UPLOAD</h3> 
        <span style={{color: 'red', backgroundColor: 'black'}}>ERROR: </span> 
        <span>{this.state.errorMessage}</span>  
        <br/> 
      </div>  
    )

    return (
      <div className = 'navItem'>

      
       {this.state.success ? <SuccessMessage/> : null}  
       {this.state.error ? <ErrorMessage/> : null}

      <h3>Upload missing persons information</h3>


        <Login onAuthentication = {this.onAuthentication}/>

          { this.state.authenticated?


               <form style={labelStyle.form} onSubmit={(e)=>{this.handleUpload(e)}} >
      
                <input type="text" name ="person" placeholder="name" onChange={this.handleChange}  />

                <input type ='text' placeholder="location" name= "location"  onChange={this.handleChange} />

                <input type ='text' placeholder= "time" name= "time" onChange={this.handleChange}  />

                <Button type="submit" style={{justifyContent:'center'}}>UPLOAD</Button>

              </form>
              
              :<p> You need to login to see this page.</p>
         }


      </div>
    )
  }
}

export default withStyles(labelStyle) (Upload);


