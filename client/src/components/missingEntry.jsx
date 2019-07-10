import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './search'
import placeholder from '../assets/img/placeholder.jpg';
import axios from 'axios';




//const apiURL = "https://rekognition-output-angelhack.s3-us-west-1.amazonaws.com/testFile";
const url = "http://localhost:4000/";




class MissingEntry extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			person:'',
			location:'',
			time: '',
			photo: null,
		}
		
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.searchInfo = this.searchInfo.bind(this);

	}


	componentDidMount() {
		this.setState({
			person:'Bob',
			location:'Fremont',
			time: '12:12',
			photo: null,});

	}


	componentDidUpdate(prevProps, prevState){

	}



	searchInfo(term){
		axios.get( url +
			"search/" ,
			{params:{
				term:`${term}`,
			}
			})
		.then(function (response) {
			console.log("SUCCESS!");
    		console.log(response);
    		console.log(response.data[0]["person"]);



    		this.setState({
				person: response.data[0]["person"],
				location: response.data[0]["location"],
				time: response.data[0]["time"],
				//photo: response.file,
    		})

  		})
  		.catch(function (error) {
  			console.log("Fuck");
  			
    		console.log(error);
  		});

	}

	onFormSubmit(term){
		console.log(`Querying  for ${term}`);
		this.searchInfo(term);

	}



	render(){
		let status = this.state;

		return(
			<div className ='navItem'>
				<h3> Missing Persons information and search</h3>
				<Search onFormSubmit = {this.onFormSubmit} />
				<div>
					<p> {status.person} was found in {status.location} at {status.time}</p>
					<img src = { 
						 	(status.photo)?
						 	status.photo :
						 	placeholder } 
						  height = '40%' width ='40%' alt="lost-person"/>
				</div>
			</div>





			)
	}



}

export default MissingEntry;
