//upload.jsx



import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Login from './login';
import Button from '@material-ui/core/Button';

const labelStyle={
  form:{
    display:'flex',
    flexDirection:'column',
    textAlign:'left',
    flexWrap:'nowrap',
    label:{
      marginLeft:"30%",
    }
  }


}

const url = "blah blah";

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
    const {data} = this.state;

    e.preventDefault();
    axios.post( url, {
      data: data,


    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  

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



      <form style={labelStyle.form}>
      
      	<label > Name
      	<input type="text"/>
      	</label>


      	<label > Location
      	<input type ='text' onChange = {this.handleChange}/>
      	</label>

      	<label >Time
      	<input type ='text' onChange = {this.handleChange}/>
      	</label>

      	<label > Photos or video
      	<input type='file' onChange = {this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
      	</label>
      

        <Button onClick={this.handleUpload}>UPLOAD</Button>
      </form>
      </div>
    )
  }
}

export default Upload;
