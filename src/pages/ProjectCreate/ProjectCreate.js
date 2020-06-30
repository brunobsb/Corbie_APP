import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { FormProjectCreate } from '../../components/molecules';


class ProjectCreate extends Component {
componentDidMount = async () => {
await this.props.loadOptions()  
}
  render(){
    // console.log(this.props.options)
    return (

      <MasterTemplate loggedUser={this.props.loggedUser}  {...this.props} >
      {this.props.options.length && <FormProjectCreate options={this.props.options} {...this.props} /> } 
      
    </MasterTemplate>
    );
  }
}

export default ProjectCreate;

