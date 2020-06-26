import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { ProjectView } from  '../../components/molecules/'

class Project extends Component {
  componentDidMount = async () => {
    await this.props.loadProjects()  
    }
  render() {
    return (
      <MasterTemplate  loggedUser={this.props.loggedUser} {...this.props}>
      <ProjectView projects={this.props.projects} />
     </MasterTemplate>
    )
  }
};

export default Project;
