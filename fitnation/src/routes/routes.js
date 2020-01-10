import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from '../App';
import SignIn from '../pages/signInPage';
import SignUp from '../pages/signUpPage';
import GymReservPage from '../pages/gymReservationPage';
import TennisReservPage from '../pages/tennisReservationPage';
import BowlingReservPage from '../pages/bowlingReservationPage';
import BilliardsReservPage from '../pages/billiardsReservationPage';
import PriceListGymPage from '../pages/priceListGymPage';
import PriceListTennisPage from '../pages/priceListTennisPage';
import PriceListBowlingPage from '../pages/priceListBowlingPage';
import PriceListBilliardsPage from '../pages/priceListBilliardsPage';
import ContactPage from '../pages/contactPage';

import GalleryPage from '../pages/galleryPage';

//const admin = (element) => element === 'admin';

const Routes = () => (
    <main>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={SignIn} />   
        <Route path='/register' component={SignUp} /> 
        <Route path='/reservation/gym' component={GymReservPage} /> 
        <Route path='/reservation/tennis' component={TennisReservPage} />
        <Route path='/reservation/bowling' component={BowlingReservPage} /> 
        <Route path='/reservation/billiards' component={BilliardsReservPage} />
        <Route path='/price-list/gym' component={PriceListGymPage} />
        <Route path='/price-list/tennis' component={PriceListTennisPage} />
        <Route path='/price-list/bowling' component={PriceListBowlingPage} />
        <Route path='/price-list/billiards' component={PriceListBilliardsPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/gallery' component={GalleryPage} />
      </Switch>
    </main>
  )
  
  export default Routes;