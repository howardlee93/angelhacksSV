//upload.jsx



import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Login from './login';
import Button from '@material-ui/core/Button';

const labelStyle={
          marginLeft:" 30%"

}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state ={
    	success : false,
      	url : "",
      	error: false,
      	errorMessage : "",
        name: "",
        location:"",
        time:"",
        file: null,


    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

  }

  handleChange(e){
  	this.setState({success: false, url : ""});


  }

  handleUpload(e){
  

  }

  render() {

  	 const SuccessMessage = () => (
      <div style={{padding:50}}>
        <h3 style={{color: 'green'}}>SUCCESSFUL UPLOAD</h3>
        <a href={this.state.url}>Access the file here</a>
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
      <Login/>



      <form style={{display:'flex',
        flexDirection:'column',
        textAlign:'left',
        flexWrap:'nowrap',
        }}>
      
      	<label style={labelStyle}> Name
      	<input type="text"/>
      	</label>


      	<label style={labelStyle}> Location
      	<input type ='text' onChange = {this.handleChange}/>
      	</label>

      	<label style={labelStyle}>Time
      	<input type ='text' onChange = {this.handleChange}/>
      	</label>

      	<label style={labelStyle}> Photos or video
      	<input type='file' onChange = {this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
      	</label>
      

        <Button onClick={this.handleUpload}>UPLOAD</Button>
      </form>
      </div>
    )
  }
}

export default Upload;
