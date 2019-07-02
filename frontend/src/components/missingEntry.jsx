


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './search'
import placeholder from '../assets/img/placeholder.jpg';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';




const apiURL = "https://rekognition-output-angelhack.s3-us-west-1.amazonaws.com/testFile";



class MissingEntry extends React.Component{

	constructor(props){
		super(props);
		this.state= {
			term:'',
			data:'',
			status:' found in Fremont on June 30, 2019'
			



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

  		})
  		.catch(function (error) {
    		console.log(error);
  		});

	}

	onFormSubmit(term){
		//this.fetchInfo(term);

		this.setState({
    			status: `${term} is found`, 
    		});

		console.log(this.state.status);



		
	}



	render(){


		return(
			<div className ='navItem'>
				<h3> Missing Persons information and search</h3>
				<Search onSubmit = {this.onFormSubmit}/>
				<div> 
					{this.state.status}
				</div>

			</div>





			)
	}



}

export default MissingEntry;
