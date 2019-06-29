

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const navbar  ={
	display: 'flex',
	flexDirection:'row',
}
const navItem = {
	padding: '5px',
}




class Index extends React.Component{


render(){
	return(
		<div style ={navbar}>
			<h3 style ={navItem}> Missing persons information </h3>
				<p> missing persons tab</p>

			<h3 style ={navItem}>Upload information</h3>
				<p> missing persons tab</p>

		
			<h3 style ={navItem}>More information</h3>
				<p> More information and additional resources</p>
		</div>

		)
	}


}

export default Index;

