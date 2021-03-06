import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



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
		e.preventDefault();
		
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
				<form onSubmit={(e) => this.handleFormSubmit(e) }>
					<TextField  type="text"
					onChange= {this.handleSearchChange}
					value= {this.state.term}
					placeholder ="enter missing person's name:"
					/>
					<p/>
					<Button type = 'submit'  variant="contained"  > Go! </Button>

				</form>
			</div>

			)
	}
}

export default Search;



