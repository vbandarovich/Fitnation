import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidenav from '../components/sidenav/sidenav';
import Navbar from '../components/navbar/navbar';
import PriceListBilliards from '../components/price-list/priceListBilliards';

class PriceListBilliardsPage extends React.Component {
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
                <Sidenav updateState={this.updateState} selected='price-list/billiards'/>   
                <PriceListBilliards />    
            </BrowserRouter>
        )
    }
}

export default PriceListBilliardsPage;