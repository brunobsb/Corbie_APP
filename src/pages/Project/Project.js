import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { ProjectView } from  '../../components/molecules/'

class Project extends Component {
  componentDidMount = async () => {
    await this.props.loadProjects()  
    }
  render() {
    return (
      <MasterTemplate  projects={this.props.projects}  loggedUser={this.props.loggedUser} {...this.props}>
      <ProjectView/>
     </MasterTemplate>
    )
  }
};

export default Project;
