import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidenav from './components/sidenav/sidenav';
import Navbar from './components/navbar/navbar';
import HomePage from './pages/homePage';
import { authenticationService } from './services/authenticationService';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      currentUser: authenticationService.currentUserValue
    }
    this.updateState = this.updateState.bind(this);
    this.updateAuth = this.updateAuth.bind(this);
  }

  updateState = (value) => {
    this.setState({ 
      expanded: value
    })
  }

  updateAuth = (value) => {
    this.setState({
      currentUser: value
    })
  }

  render() {
    return(
          <BrowserRouter>
            <Navbar expanded={this.state.expanded} updateAuth={this.updateAuth} />
            <Sidenav updateState={this.updateState} updateAuth={this.updateAuth} selected='home'/>
            <HomePage />
          </BrowserRouter>
    )
  }
}

export default App;