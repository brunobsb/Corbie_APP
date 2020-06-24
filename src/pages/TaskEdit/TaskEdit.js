import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { FormTaskEdit } from '../../components/molecules';

class TaskEdit extends Component {
  render() {
    return (
      <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
      <FormTaskEdit {...this.props} />
    </MasterTemplate>
    )
  }
}



export default TaskEdit;
