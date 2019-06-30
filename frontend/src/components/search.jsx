

import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			query:'',
		}
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		

	}

	handleSearchChange(e){
		this.setState({
			query: e.target.value,
		});



	}
	handleFormSubmit(e){
		const {onFormSubmit} = this.props;
        const { query } = this.state;

        e.preventDefault();
        
        onFormSubmit(query);



	}

	render(){
		return(
			<div>
				<form onSubmit={(e) => this.handleFormSubmit(e)}>
					<label> Search missing persons:
					<input type="text"
					onChange= {this.handleSearchChange}
					value={this.state.query}
					/>

					</label>

					<button type = 'submit' > Go! </button>

				</form>
			</div>

			)



	}



}

export default Search;