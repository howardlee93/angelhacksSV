

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  button: {
    marginLeft: '1%',
    color: "red",
  },
};


class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			term:'',
		}
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		

	}

	handleSearchChange(e){
		this.setState({
			term: e.target.value,
		});



	}
	handleFormSubmit(e){
		const {onFormSubmit} = this.props;
        const { term } = this.state;

        e.preventDefault();
        
        onFormSubmit(term);

	}

	render(){
		return(
			<div>
				<form onSubmit={(e) => this.handleFormSubmit(e)}>
					<TextField input type="text"
					onChange= {this.handleSearchChange}
					value={this.state.term}
					placeholder =" Search missing persons:"
					/>


					<Button className= {styles.button} type = 'submit' variant="contained" component="span" > Go! </Button>

				</form>
			</div>

			)



	}



}

export default withStyles(styles) (Search);



