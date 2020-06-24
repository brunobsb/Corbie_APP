import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { FormSignup } from '../../components/molecules';


class Signup extends Component {
  render() {
    return (
      <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
        <FormSignup {...this.props} />
      </MasterTemplate>
    );
  }
}


export default Signup;
