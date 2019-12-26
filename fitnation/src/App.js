import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidenav from './components/sidenav/sidenav';
import Navbar from './components/navbar/navbar';

class App extends React.Component {

  render() {
    return(
          <BrowserRouter>
            <Navbar />
            <Sidenav />
          </BrowserRouter>
    )
  }
}

export default App;