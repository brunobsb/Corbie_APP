import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { ProjectView } from  '../../components/molecules/'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects:[],
      options:[],
    };

  }
  //   listAllProjects = async (values, actions) => {
  //   console.log(values);
  //   await ApiService.listAllProjects(values);
    
  //  actions.setSubmitting(false);

  //  this.props.history.push('/project');
  // };



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
      {
        key: '1',
        title: 'Project John Brown',
        creationDate: '01/01/2019',
        status: ['BACKLOG', 'ONGOING', 'DONE', 'CANCELED' ],
        duration: 6,
        durationnow: 1,
        dueDate:'01/08/2020',
        
      },
      {
        key: '2',
        title: 'Project Jim Green',
        creationDate: '02/02/2019',
        status: ['CANCELED'],
        duration: 12,
        durationnow: 2,
        dueDate:'02/09/2020',
      },
      {
        key: '3',
        title: 'Project Joe Black',
        creationDate: '03/03/2019',
        status: ['DONE'],
        duration: 18,
        durationnow: 3,
        dueDate:'03/10/2020',
      },
    ];
   this.setState({
     projects
   })
  }
  componentDidMount = async () => {
    await this.loadOptions()  
    }

  render() {
    return (
      <MasterTemplate  loggedUser={this.props.loggedUser} {...this.props}>
      <ProjectView loadProjects={this.loadProjects} projects={this.state.projects} options={this.state.options} />
     </MasterTemplate>
    )
  }
};

export default Project;
