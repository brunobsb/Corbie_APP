
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './components/authentication';
import { Home, Login, Signup, Edit, ProjectCreate, ProjectEdit, TaskCreate, TaskEdit, Dashboard} from './pages';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      loggedUser: null,
    };
    this.verifyLoggedUser()
  }

  verifyLoggedUser = async () => {
    const loggedUserInfo = localStorage.getItem('logged-user-info');

    // eslint-disable-next-line react/no-direct-mutation-state
    if (loggedUserInfo) {
      this.state.loggedUser = true;
    }
  };


  logUser = () => {
    this.setState({
      loggedUser: true,
    });
  }

  
  render() {
    return (
    <BrowserRouter>
      
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} />}
            />
          
          <Route
            exact
            path="/login"
            render={props => <Login {...props} logUser={this.logUser} />}
          />
          <Route
            exact
            path="/signup"
            render={props => <Signup {...props} />}
          />
          <ProtectedRoute
            exact
            path="/edit"
            loggedUser={this.state.loggedUser}
            component={Edit}
            userInfo={this.state.userInfo}
            // render={props => <Edit {...props} />}
          />
          <ProtectedRoute
            exact
            path="/create-project"
            loggedUser={this.state.loggedUser}
            component={ProjectCreate}
            userInfo={this.state.userInfo}
            // render={props => <ProjectCreate {...props} />}
          />
          <ProtectedRoute
            exact
            path="/edit-project"
            loggedUser={this.state.loggedUser}
            component={ProjectEdit}
            userInfo={this.state.userInfo}
            // render={props => <ProjectManagement {...props} />}
          />

          <Route
            exact
            path="/create-task"
            loggedUser={this.state.loggedUser}
            component={TaskCreate}
            userInfo={this.state.userInfo}
            // render={props => <ProjectCreate {...props} />}
          />

          <Route
            exact
            path="/edit-task"
            loggedUser={this.state.loggedUser}
            component={TaskEdit}
            userInfo={this.state.userInfo}
            // render={props => <ProjectManagement {...props} />}
          />

          <ProtectedRoute
            exact
            path="/dashboard"
            loggedUser={this.state.loggedUser}
            component={Dashboard}
            userInfo={this.state.userInfo}
            // render={props => <DisplayAllPage {...props} />}
          />
          <Redirect to="/"/>
        </Switch>
      
    </BrowserRouter>
    );
  }
}

export default App;
