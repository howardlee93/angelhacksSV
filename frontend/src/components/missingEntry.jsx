


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './search'
import placeholder from '../assets/img/placeholder.jpg';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';




const apiURL = "https://rekognition-output-angelhack.s3-us-west-1.amazonaws.com/testFile";
const url= "";




class MissingEntry extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			person:'Bob',
			location:'Fremont',
			time: '12:12',
			photo: '',




		}
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.searchInfo = this.searchInfo.bind(this);


	}

	componentDidMount() {

	}






	searchInfo(person){

		axios.get( url +
			person
			)
		.then(function (response) {
    		console.log(response);

  		})
  		.catch(function (error) {
    		console.log(error);
  		});

	}

	onFormSubmit(person){
		//this.searchInfo(term);

		this.setState({
    			status: `${person} is found`, 
    		});

		console.log(this.state.person);



		
	}



	render(){
		const status = this.state;




		return(
			<div className ='navItem'>
				<h3> Missing Persons information and search</h3>
				<Search onSubmit = {this.onFormSubmit}/>
				<div>
					<p> {status.person} was found in {status.location} at {status.time}</p>
					<img src = { 
						 	(status.photo)?
						 	status.photo :
						 	placeholder } 
						  height = '40%' width ='40%' alt="photo"/>
				</div>
			</div>





			)
	}



}

export default MissingEntry;
