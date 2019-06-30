


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import placeholder from '../assets/img/placeholder.jpg';



class MissingEntry extends React.Component{

	constructor(props){
		super(props);

	}

	render(){
		return(
			<div className ='navItem'>
				<h3>Name</h3>
				<img src ={placeholder} alt='missing persons photo' width='40%' height = '40%'></img>
				<p> Last seen 21:21 </p>
				<p> At: Location</p>

			</div>





			)
	}



}

export default MissingEntry;
