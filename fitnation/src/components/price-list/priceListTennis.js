import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import '../../styles/price-list/priceList.css';

class PriceListTennis extends React.Component {

    render() {
        return(
            <div className='price-list'>
                <PricingTable  highlightColor='#2BBBAD'>
                    <PricingSlot highlighted onClick={()=> window.location='/reservation/tennis'} buttonText='RESERVE' title='BASIC' priceText='$5/hour/table'>
                        <PricingDetail> 1 table </PricingDetail>
                        <PricingDetail> full equipment </PricingDetail>
                        <PricingDetail> medical support </PricingDetail>
                    </PricingSlot>
                    <PricingSlot  onClick={()=> window.location='/reservation/tennis'} buttonText='RESERVE' title='EXTENDED' priceText='$13/3-hours/table'>
                        <PricingDetail> 1 table </PricingDetail>
                        <PricingDetail> full equipment </PricingDetail>
                        <PricingDetail> medical support </PricingDetail>
                    </PricingSlot>
                    <PricingSlot  onClick={()=> window.location='/reservation/tennis'} buttonText='RESERVE' title='UNLIMIT' priceText='$35/full day/table'>
                        <PricingDetail> 1 table </PricingDetail>
                        <PricingDetail> full equipment </PricingDetail>
                        <PricingDetail> medical support </PricingDetail>
                    </PricingSlot>
                </PricingTable>
            </div>
        )
    }
}

export default PriceListTennis;