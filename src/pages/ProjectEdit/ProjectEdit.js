import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { FormProjectEdit } from '../../components/molecules';


class ProjectEdit extends Component {
  render() {
    return(
      <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
      <FormProjectEdit {...this.props} />
    </MasterTemplate>
    );
  }
}


export default ProjectEdit;
