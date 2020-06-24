import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { FormLogin } from '../../components/molecules';

class Login extends Component {
  render() {
    return (
      <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
      <FormLogin {...this.props} />
    </MasterTemplate>
    )
  }
}


export default Login;
