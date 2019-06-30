//upload.jsx



import React, {Component} from 'react';
import ReactDOM from 'react-dom';




class Upload extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className = 'navItem'>
      <h3>Upload missing persons information</h3>
      <form>
      
      	<p><label> Name
      	<input type="text"/>
      	</label>
      	</p>


      	<p>
      	<label> Location
      	<input type ='text'/>
      	</label>
      	</p>

      	<p>
      	<label>Time
      	<input type ='text'/>
      	</label>
      	</p>

      	<p>
      	<label> Photos
      	<input type='file' />
      	</label>
      	</p>

      	<input type="submit"/>
      </form>
      </div>
    )
  }
}

export default Upload;
