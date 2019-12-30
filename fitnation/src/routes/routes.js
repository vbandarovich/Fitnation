import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from '../App';
import SignIn from '../pages/signInPage';
import SignUp from '../pages/signUpPage';
import TennisReservPage from '../pages/tennisReservationPage';

//const admin = (element) => element === 'admin';

const Routes = () => (
    <main>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={SignIn} />   
        <Route path='/register' component={SignUp} />  
        <Route path='/reservation/tennis' component={TennisReservPage} />  
      </Switch>
    </main>
  )
  
  export default Routes;