// // import React, { Component } from 'react';
// // import { MasterTemplate } from '../../templates';
// // import { TaskView } from  '../../components/molecules/'

// // class Task extends Component {
// //   render() {
// //     return (
// //       <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
// //       <TaskView/>
// //      </MasterTemplate>
// //     )
// //   }
// // };

// import React, { Component } from 'react';
// import { MasterTemplate } from '../../templates';
// import { TaskView } from  '../../components/molecules/'

// class Task extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks:[],
//       options:[],
//     };

//   }

//   loadOptions = () => {
//     console.log("ENTROU!!!!!!")
//    const options = [{value:"BACKLOG", displayValue:"BACKLOG"}, {value:"ONGOING",displayValue:"ONGOING"}, {value:"DONE", displayValue:"DONE"}, {value:"CANCELED", displayValue:"CANCELED"}] 
 
//    this.setState({
//      options
//    })
//   }



//   loadTasks = () => {
//     console.log("Este é o loadTasks")
//     const tasks = [
//       {
//         key: '1',
//         title: 'Edit Page bugfix',
//         description: 'TESTE',
//         duration: 6,
//         cost: 222,
//         status: ['BACKLOG', 'ONGOING', 'DONE', 'CANCELED' ],
//         type: '????',
//         profitable: true,
//         creationDate: '01/01/2019',
//         durationnow: 1,
//         dueDate:'01/08/2020',
        
//       },
//       {
//         key: '2',
//         title: 'UserForm update',
//         description: 'TESTE',
//         duration: 12,
//         cost: 333,
//         status: ['CANCELED'],
//         type: '????',
//         profitable: true,
//         creationDate: '02/02/2019',
//         durationnow: 2,
//         dueDate:'02/09/2020',
        
//       },
//       {
//         key: '3',
//         title: 'Layout config',
//         description: 'TESTE2',
//         duration: 18,
//         cost: 444,
//         status: ['DONE'],
//         type: '????',
//         profitable: true,
//         creationDate: '03/03/2019',
//         durationnow: 3,
//         dueDate:'03/10/2020',
        
//       },
//     ];
//    this.setState({
//      tasks
//    })
//   }
//   componentDidMount = async () => {
//     await this.loadOptions()  
//     }

//   render() {
//     return (
//       <MasterTemplate  loggedUser={this.props.loggedUser} {...this.props}>
//       <TaskView loadTasks={this.loadTasks} tasks={this.state.tasks} options={this.state.options} />
//      </MasterTemplate>
//     )
//   }
// };

// export default Task;
