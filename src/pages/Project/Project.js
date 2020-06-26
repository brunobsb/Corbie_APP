import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { ProjectView } from  '../../components/molecules/'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects:[],
    };

  }



  loadProjects = () => {
    console.log("Este é o loadProjects")
    const projects = [  {
     key: '1',
     name: 'John Brownnnnnnn22222sdssdsdd',
     age: 32,
     address: 'New York No. 1 Lake Park',
   },
   {
     key: '2',
     name: 'Jim Green',
     age: 42,
     address: 'London No. 1 Lake Park',
   },
   {
     key: '3',
     name: 'Joe Black',
     age: 32,
     address: 'Sidney No. 1 Lake Park',
   },
   {
     key: '4',
     name: 'Jim Red',
     age: 32,
     address: 'London No. 2 Lake Park',
   }]
   this.setState({
     projects
   })
  }

  render() {
    return (
      <MasterTemplate  loggedUser={this.props.loggedUser} {...this.props}>
      <ProjectView loadProjects={this.loadProjects} projects={this.state.projects}  />
     </MasterTemplate>
    )
  }
};

export default Project;
