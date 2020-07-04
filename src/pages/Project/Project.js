import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { ProjectView } from  '../../components/molecules/'
import ApiService from '../../api/Service';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects:[],
      options:[],
    };

  }

  onClick = async e => {
    const { projects } = this.state;
    const id = e.target.attributes.data.value;

    const projectInfos = await this.getProjectInfos(projects, id);
    await localStorage.setItem('projectInfos', projectInfos)
console.log({projectInfos})
    this.props.history.push({
      pathname: "/task",
      // state: {
      //   projectInfos
      // }
    });

  };

  getProjectInfos = async (projects, id) => {
    const project = await projects.filter(item => item._id.includes(id));
    const tasks = await ApiService.listAllTasksFromProject(id);

    return { ...project[0], tasks };
  };

  loadOptions = () => {
    console.log("ENTROU!!!!!!")
   const options = [{value:"BACKLOG", displayValue:"BACKLOG"}, {value:"ONGOING",displayValue:"ONGOING"}, {value:"DONE", displayValue:"DONE"}, {value:"CANCELED", displayValue:"CANCELED"}] 
 
   this.setState({
     options
   })
  }



  loadProjects = () => {
    console.log("Este é o loadProjects")
    const projects = [
 
    ];
   this.setState({
     projects
   })
  }
  componentDidMount = async () => {
    const projects = await ApiService.listAllProjects();

    this.setState({ projects });

    await this.loadOptions()  
    }

  render() {
    return (
      <MasterTemplate  loggedUser={this.props.loggedUser} {...this.props}>
      <ProjectView  projects={this.state.projects} onClick={this.onClick} options={this.state.options} />
     </MasterTemplate>
    )
  }
};

export default Project;
