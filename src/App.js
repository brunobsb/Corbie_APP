
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Home, Login, Signup, Edit, Project, ProjectCreate, ProjectEdit, Task, TaskCreate, TaskEdit, Dashboard} from './pages';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      loggedUser: false,
      options:[],
      projects:[],
    };
    this.verifyLoggedUser();
  }

  verifyLoggedUser = async () => {
    const loggedUserInfo = localStorage.getItem('logged-user-info');

    if (loggedUserInfo) {
      this.state.loggedUser = true;
    }
  };


  logUser = () => {
    this.setState({
      loggedUser: true,
    });
  }

  logout = () => {
    localStorage.removeItem("logged-user-info");
  
    this.setState({
      loggedUser: false,
    });
  
    return;
  }

  
onChange = (value) => {
  console.log(`selected ${value}`);
}
 loadOptions = () => {
   console.log("ENTROU!!!!!!")
  const options = [{value:"BACKLOG"}, {value:"ONGOING"}, {value:"DONE"}, {value:"CANCELED"}] 

  this.setState({
    options
  })
 }
 
 loadProjects = () => {
   console.log("Este é o loadProjects")
   const projects = [  {
    key: '1',
    name: 'John Brownnnnnnn',
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
    <BrowserRouter>
      
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home loggedUser={this.state.loggedUser} {...props} />}
            />
          <Route
            exact
            path="/signup"
            render={props => <Signup logout={this.logout} loggedUser={this.state.loggedUser} {...props} />}
          />
          <Route
            exact
            path="/login"
            render={props => <Login logout={this.logout} loggedUser={this.state.loggedUser} {...props} 
            logUser={this.logUser} />}
          />

          <Route
            exact
            path="/edit"
            render={props => <Edit logout={this.logout} loggedUser={this.state.loggedUser} userInfo={this.state.userInfo} {...props} />}
          />
          <Route
            exact
            path="/project"
            render={props => <Project logout={this.logout} loggedUser={this.state.loggedUser} userInfo={this.state.userInfo} loadProjects={this.loadProjects} projects={this.state.projects}  {...props} />}
          />
          <Route
            exact
            path="/create-project"
            render={props => <ProjectCreate logout={this.logout} loggedUser={this.state.loggedUser} userInfo={this.state.userInfo} options={this.state.options} loadOptions={this.loadOptions} {...props} />}
          />
          <Route
            exact
            path="/edit-project"
            render={props => <ProjectEdit logout={this.logout} loggedUser={this.state.loggedUser} userInfo={this.state.userInfo} {...props} />}
          />
          <Route
            exact
            path="/task"
            render={props => <Task logout={this.logout} loggedUser={this.state.loggedUser} userInfo={this.state.userInfo} {...props} />}
          />
          <Route
            exact
            path="/create-task"
            render={props => <TaskCreate logout={this.logout} loggedUser={this.state.loggedUser} userInfo={this.state.userInfo} {...props} />}
          />

          <Route
            exact
            path="/edit-task"
            render={props => <TaskEdit logout={this.logout} loggedUser={this.state.loggedUser} userInfo={this.state.userInfo} {...props} />}
          />

          <Route
            exact
            path="/dashboard"
            render={props => <Dashboard logout={this.logout} loggedUser={this.state.loggedUser} userInfo={this.state.userInfo} {...props} />}
          />
          <Redirect to="/"/>
        </Switch>
      
    </BrowserRouter>
    );
  }
}

export default App;
