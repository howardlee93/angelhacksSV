



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Upload from './components/upload';
import MissingEntry from './components/missingEntry';
import MoreInfo from './components/moreinfo';
import './assets/styles/app.css';



const navbar  ={
	display: 'flex',
	flexDirection:'row',
}
const navItem = {
	padding: '5px',
}




class App extends React.Component{

	constructor(props){
		super(props);

	}


render(){
	return(
		<div>
		<h1> Missing persons portal</h1>
		
		<div style={navbar}>

		<MissingEntry style ={navItem}/>
			
		<Upload style ={navItem}/>
		
		<MoreInfo style ={navItem}/>
		
		
		</div>
		
		</div>

		)
	}


}


export default App;
