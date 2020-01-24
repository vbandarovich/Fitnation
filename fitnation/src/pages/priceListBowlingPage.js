import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidenav from '../components/sidenav/sidenav';
import Navbar from '../components/navbar/navbar';
import PriceListBowling from '../components/price-list/priceListBowling';
import { authenticationService } from '../services/authenticationService';

class PriceListBowlingPage extends React.Component {
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
                <Navbar expanded={this.state.expanded} updateAuth={this.updateAuth}/>
                <Sidenav updateState={this.updateState} updateAuth={this.updateAuth} selected='price-list/bowling'/>   
                <PriceListBowling />    
            </BrowserRouter>
        )
    }
}

export default PriceListBowlingPage;