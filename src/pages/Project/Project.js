import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { ProjectView } from  '../../components/molecules/'

class Project extends Component {
  render() {
    return (
      <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
      <ProjectView/>
     </MasterTemplate>
    )
  }
};

export default Project;
