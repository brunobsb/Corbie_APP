import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { MasterTemplate } from '../../templates';
import { FormEdit } from '../../components/molecules';

class Edit extends Component {

  render(){
    
    return (

      <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
        <FormEdit {...this.props} />
      </MasterTemplate>
    );
  }
}


export default Edit;
