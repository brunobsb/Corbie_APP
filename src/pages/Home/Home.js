import React, { Component } from 'react';
import { MasterTemplate } from '../../templates';
import { HomeView } from  '../../components/molecules/'

class Home extends Component {
  render() {
    return (
      <MasterTemplate loggedUser={this.props.loggedUser} {...this.props}>
      <HomeView/>
     </MasterTemplate>
    )
  }
};

export default Home;
