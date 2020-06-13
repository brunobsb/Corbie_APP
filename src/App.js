
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './components/authentication';
import { Home, Login, Signup, Edit, ProjectCreate, ProjectManagement, DisplayAllPage} from './pages';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      loggedUser: null,
    };
  }

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
            component={ProjectManagement}
            userInfo={this.state.userInfo}
            // render={props => <ProjectManagement {...props} />}
          />

          <ProtectedRoute
            exact
            path="/displayallpage"
            loggedUser={this.state.loggedUser}
            component={DisplayAllPage}
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
