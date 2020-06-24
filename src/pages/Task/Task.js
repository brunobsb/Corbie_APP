import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { TaskView } from  '../../components/molecules/'

class Task extends Component {
  render() {
    return (
      <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
      <TaskView/>
     </MasterTemplate>
    )
  }
};

export default Task;
