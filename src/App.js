import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "../src/views/Dashboard";
import Callback from './Callback';
import {Route, withRouter} from 'react-router-dom';
import SecuredRoute from './secured/SecuredRoute';
import auth0Client from './Auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }
  // async componentDidMount() {
  //   if (this.props.location.pathname === '/callback') return;
    
  // }
  // async componentDidMount() {
  //   if (this.props.location.pathname === '/callback') {
  //     this.setState({checkingSession:false});
  //     return;
  //   }
  //   try {
  //     await auth0Client.silentAuth();
  //     this.forceUpdate();
  //   } catch (err) {
  //     if (err.error !== 'login_required') console.log(err.error);
  //   }
  //   this.setState({checkingSession:false});
  // }

  render() {
    return (
      <>
        <SecuredRoute 
          path='/'
          component={Dashboard}
          checkingSession={this.state.checkingSession} 
        />
        <Route exact path="/callback" component={Callback}/>
      </>
    );
  }
}

export default withRouter(App);