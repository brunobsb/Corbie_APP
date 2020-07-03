// import React, { Component } from 'react';
// import { MasterTemplate } from '../../templates';
// import { FormProjectCreate } from '../../components/molecules';


// class ProjectCreate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       options:[],
//     };
   
//   }
//   loadOptions = () => {
//     console.log("ENTROU!!!!!!")
//    const options = [{value:"BACKLOG"}, {value:"ONGOING"}, {value:"DONE"}, {value:"CANCELED"}] 
 
//    this.setState({
//      options
//    })
//   }
// componentDidMount = async () => {
// await this.loadOptions()  
// }
//   render(){
//     // console.log(this.props.options)
//     return (

//       <MasterTemplate loggedUser={this.props.loggedUser}  {...this.props} >
//       {this.props.options.length && <FormProjectCreate options={this.state.options} {...this.props} /> } 
      
// //     </MasterTemplate>
//     );
//   }
// }

// export default ProjectCreate;

