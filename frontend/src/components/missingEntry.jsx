


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './search'
import placeholder from '../assets/img/placeholder.jpg';



class MissingEntry extends React.Component{

	constructor(props){
		super(props);

	}

	render(){
		return(
			<div className ='navItem'>

				<h3><Search/></h3>
				<h4>Name</h4>
				<img src ={placeholder} alt='missing persons photo' width='20%' height = '20%'></img>
				<p> Last seen 21:21 </p>
				<p> At: Location</p>

			</div>





			)
	}



}

export default MissingEntry;
