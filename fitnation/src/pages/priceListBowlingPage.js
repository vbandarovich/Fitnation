import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidenav from '../components/sidenav/sidenav';
import Navbar from '../components/navbar/navbar';
import PriceListBowling from '../components/price-list/priceListBowling';

class PriceListBowlingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
          }
        this.updateState = this.updateState.bind(this);
    }

    updateState = (value) => {
        this.setState({ 
          expanded: value
        })
    }
      
    render() {
        return(
            <BrowserRouter>
                <Navbar expanded={this.state.expanded}/>
                <Sidenav updateState={this.updateState} selected='price-list/bowling'/>   
                <PriceListBowling />    
            </BrowserRouter>
        )
    }
}

export default PriceListBowlingPage;