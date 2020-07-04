import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { TaskView } from  '../../components/molecules/'

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[],
      options:[],
    };

  }

  loadOptions = () => {
    console.log("ENTROU!!!!!!")
   const options = [{value:"BACKLOG", displayValue:"BACKLOG"}, {value:"ONGOING",displayValue:"ONGOING"}, {value:"DONE", displayValue:"DONE"}, {value:"CANCELED", displayValue:"CANCELED"}] 
 
   this.setState({
     options
   })
  }



  loadTasks = () => {
const tasks = this.props.history.location.state.projectInfos
   this.setState({
     tasks
   })
  }
  componentDidMount = async () => {
    await this.loadOptions()
    await this.loadTasks()
    }

  render() {

    return (
      <MasterTemplate  loggedUser={this.props.loggedUser} {...this.props}>
      <TaskView  tasks={this.state.tasks} options={this.state.options} />
     </MasterTemplate>
    )
  }
};

export default Task;
