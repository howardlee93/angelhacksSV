



import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
  	Route,
  	Link,
 	NavLink,
 	Switch
} from 'react-router-dom';

import logo from './assets/img/logo.png';

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

		<div >
            <div className="navBar">
            <img  src ={logo} alt='missing-persons' width='10%' height = '10%' ></img>

          		<NavLink to='/MissingEntry' className="link">Missing person</NavLink>
          		<NavLink to='/Upload' className="link">Upload information</NavLink>
          		<NavLink to='/MoreInfo' className="link">Additional resources</NavLink>
              </div>

          	 <div className="tabs" style={{display:'flex', justifyContent:'center'}}>
          	 	
               <Switch>
          	 	
               	<Route path='/MissingEntry'  component={MissingEntry}/>
          	 	 	<Route path='/Upload' component={Upload}/>
          	 	 	<Route path='/MoreInfo'  component={MoreInfo}/>

          	 	 </Switch>

          	 </div>
             <footer style={{display:'flex', justifyContent:'center'}}>
              <p> AngelHacks Silicon Valley 2019</p>
             </footer>

		</div>
		)
	}


}



export default App;
