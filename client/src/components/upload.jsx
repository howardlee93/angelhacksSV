//upload.jsx

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Login from './login';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const labelStyle ={
  form:{
    display:'flex',
    flexDirection:'column',
    flexWrap:'nowrap',
    textAlign: 'left',
    margin:'0 20% 0 20% '
    }
  }

const url = "http://localhost:4000/";

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100) // fake async
//   }
// }

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state ={
    	 // success : false,
      // 	error: false,
      // 	errorMessage : "",
        person: "",
        location:"",
        time:"",
      //  file: null,


    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

  }

  handleChange(e){
  	this.setState({
      [e.target.name]: e.target.value
    });



  }

  handleUpload(e){
    e.preventDefault();
    // const uploadData = this.state;

    // const formData = new FormData();
    // Object.keys(uploadData).forEach(key => formData.append(key, uploadData[key]));
    // console.log(formData.get("name"));//testing 

    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //         }
    //     };
        
    axios.post(url + "upload",  this.state)
            .then((response) => {
                alert("The file is successfully uploaded");
              //  this.setState({success: true});
             //   console.log(this.state.success);
                console.log(response);
                

            }).catch((error) => {
                this.setState({success: false});
                console.log(error);



        });

  }

  render() {


    return (
      <div className = 'navItem'>

      <h3>Upload missing persons information</h3>


      <form style={labelStyle.form} onSubmit={(e)=>{this.handleUpload(e)}} >
      
      	<input type="text" name ="person" placeholder="name" onChange = {this.handleChange}/>

      	<input type ='text' placeholder="location" name= "location" onChange = {this.handleChange}/>

      	<input type ='text' placeholder= "time" name= "time" onChange = {this.handleChange}/>

        <Button type="submit" style={{justifyContent:'center'}}>UPLOAD</Button>


      </form>

      </div>
    )
  }
}

export default withStyles(labelStyle) (Upload);
