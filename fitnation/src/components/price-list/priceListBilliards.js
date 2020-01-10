import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import '../../styles/price-list/priceList.css';
import { MDBIcon } from 'mdbreact';

class PriceListBilliards extends React.Component {

    render() {
        return(
            <div className='price-list'>
                <div className='bgBilliardsPrice-list'></div>
                <PricingTable  highlightColor='#2BBBAD'>
                    <PricingSlot highlighted onClick={()=> window.location='/reservation/billiards'} buttonText='RESERVE' title='BASIC' priceText='$6/hour/table'>
                        <PricingDetail> <MDBIcon icon="table" /> 1 table </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                    <PricingSlot  onClick={()=> window.location='/reservation/billiards'} buttonText='RESERVE' title='EXTENDED' priceText='$15/3-hours/table'>
                        <PricingDetail> <MDBIcon icon="table" /> 1 table </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                    <PricingSlot  onClick={()=> window.location='/reservation/billiards'} buttonText='RESERVE' title='UNLIMIT' priceText='$50/full day/table'>
                        <PricingDetail> <MDBIcon icon="table" /> 1 table </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                </PricingTable>
            </div>
        )
    }
}

export default PriceListBilliards;