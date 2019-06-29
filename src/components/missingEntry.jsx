


import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class MissingEntry extends React.Component{

	constructor(props){
		super(props);

	}

	render(){
		return(
			<div>
				<h3>Name</h3>
				<img src ='../assets/img/placeholder.jpg' alt='missing persons photo'></img>
				<p> Last seen 21:21 </p>
				<p> At: Location</p>

			</div>





			)
	}



}

export default MissingEntry;
