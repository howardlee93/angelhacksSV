import React, {Component} from 'react';
import Search from './search'
import placeholder from '../assets/img/placeholder.jpg';
import axios from 'axios';





class MissingEntry extends Component{

	constructor(props){
		super(props);
		this.state = {
			person:'',
			location:'',
			time: '',
			photo:null
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
		axios.get( "/search" ,
			{params: {
				term:`${term}`,
				}
			})
		.then( (response)=>{
			console.log("SUCCESS!");
    		console.log(response);
    		console.log(response.data[0]["person"]);
    		console.log(typeof(response.data[0]["time"]));
    		var d = new Date(response.data[0]["time"]);





    		this.setState({
				person: response.data[0]["person"],
				location: response.data[0]["location"],
				time: d.toLocaleTimeString()
    		})

  		})
  		.catch(function (error) {
  			console.log("Fuck");
  			
    		console.log(error);
  		});

	}

	onFormSubmit(term){
		console.log(`Querying for ${term}`);
		this.searchInfo(term);

	}


	render(){
		let status = this.state;

		return(
			<div className ='navItem'>
				<h3> Missing Persons information and search</h3>
				<Search onFormSubmit = {this.onFormSubmit} />
				<div>
				<img src = { 
						 	(status.photo)?
						 	status.photo :
						 	placeholder } 
						  height = '19%' width ='19%' alt="lost-person"/>
					<h4 style={{color:'green', fontSize:'20px'}}> {status.person} was found in {status.location} at {status.time}</h4>
					
				</div>
			</div>

			)
	}


}

export default MissingEntry;
