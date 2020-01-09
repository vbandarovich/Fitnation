import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from '../App';
import SignIn from '../pages/signInPage';
import SignUp from '../pages/signUpPage';
import TennisReservPage from '../pages/tennisReservationPage';
import BowlingReservPage from '../pages/bowlingReservationPage';
import BilliardsReservPage from '../pages/billiardsReservationPage';
import PriceListTennisPage from '../pages/priceListTennisPage';
import GalleryPage from '../pages/gallleryPage';

//const admin = (element) => element === 'admin';

const Routes = () => (
    <main>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={SignIn} />   
        <Route path='/register' component={SignUp} />  
        <Route path='/reservation/tennis' component={TennisReservPage} />
        <Route path='/reservation/bowling' component={BowlingReservPage} /> 
        <Route path='/reservation/billiards' component={BilliardsReservPage} />
        <Route path='/price-list/tennis' component={PriceListTennisPage} />
        <Route path='/gallery' component={GalleryPage} />
      </Switch>
    </main>
  )
  
  export default Routes;