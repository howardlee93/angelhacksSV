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
  constructor(props){
    super(props);
    this.state = {
      login: false,
    }
     this.onLogin = this.onLogin.bind(this);

  }


  onLogin(){

    !this.state.login?
      this.setState({
        login: true,
      })
      : this.setState({
        login: false,
     }) ;

    const {onAuthentication} = this.props;
    onAuthentication();
    
  }

  render() {

    const {
      classes,
    } = this.props;

    return (
      <div>
        <center>
          <div className={classes.box}>
            {this.state.login? <div/> :<h3> Login to upload information</h3>}

            <div className={classes.box}>
              <form id="login">
                <input type='button' onClick={this.onLogin} name="" value = {this.state.login? "Logout":"Login"} ></input>
              </form>
            </div>
          </div>
        </center>
      </div>
    );
  }
}


export default withStyles(styles)(Login);