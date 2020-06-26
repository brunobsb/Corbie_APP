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
    const projects = [
      {
        key: '1',
        name: 'John Brown',
        creationDate: 32,
        status: ['BACKLOG', 'ONGOING', 'DONE', 'CANCELED' ],
        duration: 'New York No. 1 Lake Park',
        
      },
      {
        key: '2',
        name: 'Jim Green',
        creationDate: 42,
        status: ['CANCELED'],
        duration: 'London No. 1 Lake Park',
        
      },
      {
        key: '3',
        name: 'Joe Black',
        creationDate: 32,
        status: ['DONE', 'ONGOING'],
        duration: 'Sidney No. 1 Lake Park',
        
      },
    ];
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
