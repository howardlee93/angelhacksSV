


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './search'
import placeholder from '../assets/img/placeholder.jpg';
import axios from 'axios';


const apiURL = "https://rekognition-cali.s3-us-west-1.amazonaws.com/";



class MissingEntry extends React.Component{

	constructor(props){
		super(props);
		this.state= {
			term:'',
			img:'',
			



		}
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.fetchInfo = this.fetchInfo.bind(this);


	}

	componentDidMount() {

	}




	fetchInfo(term){

		axios.get(apiURL +
			term
			)
		.then(function (response) {
    		console.log(response);
    		this.setState({
    			img: apiURL +term, 
    		});

  		})
  		.catch(function (error) {
    		console.log(error);
  		});

	}

	onFormSubmit(term){
		this.fetchInfo(term);
		this.setState({
    			img: `${apiURL} +${term}`, 
    		});


		
	}



	render(){
		return(
			<div className ='navItem'>

				<h3><Search onFormSubmit = {this.onFormSubmit}/></h3>
				<h4>Name</h4>
				<img src ={placeholder} alt='missing persons photo' height = '30%' width = '30%'></img>
				<p> Last seen 21:21 </p>
				<p> At: Location</p>

			</div>





			)
	}



}

export default MissingEntry;
