//upload.jsx



import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../assets/styles/upload.css'



class Upload extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Upload">
        <div className= "Title">Upload Files</div>
        <div className="Content">
          <div />
          <div className="Files" />
        </div>
        <div className="Actions" />
      </div>
    )
  }
}

export default Upload;
