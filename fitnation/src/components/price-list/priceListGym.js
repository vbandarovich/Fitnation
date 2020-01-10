import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import '../../styles/price-list/priceList.css';
import { MDBIcon } from 'mdbreact';

class PriceListGym extends React.Component {

    render() {
        return(
            <div className='price-list'>
                <div className='bgGymPrice-list'></div>
                <PricingTable  highlightColor='#2BBBAD'>
                    <PricingSlot highlighted onClick={()=> window.location='/reservation/gym'} buttonText='RESERVE' title='BASIC' priceText='$8/hour'>
                        <PricingDetail> <MDBIcon icon="dumbbell" /> full gym area </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                    <PricingSlot  onClick={()=> window.location='/reservation/gym'} buttonText='RESERVE' title='EXTENDED' priceText='$20/3-hours'>
                        <PricingDetail> <MDBIcon icon="dumbbell" /> full gym area </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                    <PricingSlot  onClick={()=> window.location='/reservation/gym'} buttonText='RESERVE' title='UNLIMIT' priceText='$70/full day'>
                        <PricingDetail> <MDBIcon icon="dumbbell" /> full gym area </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                </PricingTable>
            </div>
        )
    }
}

export default PriceListGym;