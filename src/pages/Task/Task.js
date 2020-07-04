import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { TaskView } from  '../../components/molecules/'

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[],
      options:[],
      project:'',
    };

  }

  loadOptions = () => {
    console.log("ENTROU!!!!!!")
   const options = [{value:"Backlog", displayValue:"Backlog"}, {value:"OnGoing",displayValue:"OnGoing"}, {value:"Done", displayValue:"Done"}];
 
   this.setState({
     options
   })
  }



  loadTasks = () => {
const tasks = localStorage.getItem('projectInfos')projectInfos.tasks
const project = localStorage.projectInfos._id
console.log({tasks, project})
   this.setState({
     tasks,
     project
   })
  }
  componentDidMount = async () => {
    await this.loadOptions()
    await this.loadTasks()
    }

  render() {

    return (
      <MasterTemplate  loggedUser={this.props.loggedUser} {...this.props}>
      <TaskView  tasks={this.state.tasks} options={this.state.options} project={this.state.project} loadTasks={this.loadTasks} />
     </MasterTemplate>
    )
  }
};

export default Task;
