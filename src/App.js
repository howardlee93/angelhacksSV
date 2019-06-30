



import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
  	Route,
  	Link,
 	NavLink,
 	Switch
} from 'react-router-dom';

import Upload from './components/upload';
import MissingEntry from './components/missingEntry';
import MoreInfo from './components/moreinfo';

import './assets/styles/app.css';




class App extends React.Component{

	constructor(props){
		super(props);

	}


render(){

	return(

		<div>
				<h1> Missing persons portal</h1>


          		<NavLink to='/MissingEntry' className="link">Missing person</NavLink>
          		<NavLink to='/Upload' className="link">Upload information</NavLink>
          		<NavLink to='/MoreInfo' className="link">Additional resources</NavLink>


          	 <div className="tabs">
          	 	 <Switch>
          	 	 	<Route path='/MissingEntry'  component={MissingEntry}/>
          	 	 	<Route path='/Upload' component={Upload}/>
          	 	 	<Route path='/MoreInfo'  component={MoreInfo}/>



          	 	 </Switch>



          	 </div>

		</div>

		

		)
	}


}



export default App;
