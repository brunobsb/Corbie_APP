// import React, { Component } from 'react';
// import { MasterTemplate } from '../../templates';
// import { TaskView } from  '../../components/molecules/'

// class Task extends Component {
//   render() {
//     return (
//       <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
//       <TaskView/>
//      </MasterTemplate>
//     )
//   }
// };

import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { TaskView } from  '../../components/molecules/'

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[],
    };

  }

  loadTasks = () => {
    console.log("Este é o loadTasks")
    const tasks = [
      {
        key: '1',
        title: 'Edit Page bugfix',
        creationDate: '01/01/2019',
        status: ['BACKLOG', 'ONGOING', 'DONE', 'CANCELED' ],
        duration: 6,
        durationnow: 1,
        dueDate:'01/08/2020'
        
      },
      {
        key: '2',
        title: 'UserForm update',
        creationDate: '02/02/2019',
        status: ['CANCELED'],
        duration: 12,
        durationnow: 2,
        dueDate:'02/09/2020',
        
      },
      {
        key: '3',
        title: 'Layout config',
        creationDate: '03/03/2019',
        status: ['DONE'],
        duration: 18,
        durationnow: 3,
        dueDate:'03/10/2020',
        
      },
    ];
   this.setState({
     tasks
   })
  }


  render() {
    return (
      <MasterTemplate  loggedUser={this.props.loggedUser} {...this.props}>
      <TaskView loadTasks={this.loadTasks} tasks={this.state.tasks}  />
     </MasterTemplate>
    )
  }
};

export default Task;
