import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import '../../styles/price-list/priceList.css';
import { MDBIcon } from 'mdbreact';

class PriceListBowling extends React.Component {

    render() {
        return(
            <div className='price-list'>
                <div className='bgBowlingPrice-list'></div>
                <PricingTable  highlightColor='#2BBBAD'>
                    <PricingSlot highlighted onClick={()=> window.location='/reservation/bowling'} buttonText='RESERVE' title='BASIC' priceText='$7/hour/boyling alley'>
                        <PricingDetail> <MDBIcon icon="bowling-ball" /> 1 boyling alley </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                    <PricingSlot  onClick={()=> window.location='/reservation/bowling'} buttonText='RESERVE' title='EXTENDED' priceText='$18/3-hours/boyling alley'>
                        <PricingDetail> <MDBIcon icon="bowling-ball" /> 1 boyling alley </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                    <PricingSlot  onClick={()=> window.location='/reservation/bowling'} buttonText='RESERVE' title='UNLIMIT' priceText='$60/full day/boyling alley'>
                        <PricingDetail> <MDBIcon icon="bowling-ball" /> 1 boyling alley </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                </PricingTable>
            </div>
        )
    }
}

export default PriceListBowling;