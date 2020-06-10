import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home, Login, Signup, Edit } from './pages';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
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
            render={props => <Login {...props} />}
          />
          <Route
            exact
            path="/signup"
            render={props => <Signup {...props} />}
          />
          <Route
            exact
            path="/edit"
            render={props => <Edit {...props} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
