import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class MoreInfo extends React.Component{

	constructor(props){
		super(props);

	}

	render(){
		return(
			<div className="navItem">
				<h3>Here are some resources for you</h3>
				<a href="https://oag.ca.gov/missing"> California Missing Persons</a>
				<a href="https://oag.ca.gov/missing"> National Center for Missing and Exploited Children</a>

				
			</div>





			)
	}



}

export default MoreInfo;
