import React, {Component } from 'react';
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
  box: {

    fontFamily: 'sans-serif',
    fontSize: 18,
  },

  header: {
    backgroundColor: 'blue',
    color: 'white',
  }
});

class Login extends Component {

  render() {

    const {
      classes,
      dashNav
    } = this.props;

    return (
      <div>
        <center>
          <div className={classes.box}>
            <h1>Login to upload information</h1>
            <div className={classes.box}>
              <form id="login">
                <label>Username</label><br></br>
                <input id='username'></input><br></br>
                <label>Password</label><br></br>
                <input type='password' id='password'></input><p></p>
                <input type='checkbox'></input><label>Remember me</label><br></br>
                <input type='button' onClick={dashNav} name="" value="Login"></input>
              </form>
            </div>
          </div>
        </center>
      </div>
    );
  }
}


export default withStyles(styles)(Login);