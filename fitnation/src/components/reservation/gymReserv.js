import React from 'react';
import '../../styles/reservation/gymReservation.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import TimeSelect from './timeSelect';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker } from '@material-ui/pickers';
  import { MDBBtn, MDBAlert } from 'mdbreact';
  import { authenticationService } from '../../services/authenticationService';
  import { handleResponse } from '../../helpers/handleResponce';


class TennisReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
            error: false,
            currentUser: authenticationService.currentUserValue
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = () => {
        try{
            let userEmail = this.state.currentUser.email;
            let typeObject = 'Gym';
    
            let timeElement = document.getElementsByClassName('col-sm-5 col-md-4 time-select')[0];
            let timeRange = timeElement.innerText;

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"Email": userEmail, "TimeRange": timeRange, "Type": typeObject, 
                    "ObjectNames": ['Gym 1'], "DateReservation": this.state.selectedDate})
            };

            fetch(`https://localhost:44348/api/reservation`, requestOptions)
                .then(handleResponse)
                .then(
                    (result) => {
                        window.location='/';
                    }     
                )
        }
        catch(ex) {
            this.setState({
                error: true
            })
        }    
    }

    render() {
        const { selectedDate, error } = this.state;

        const handleDateChange = date => {
            this.setState({
                selectedDate: date
            })
        };

        return(
            <div style={{overflowX: 'hidden', overflowY: 'hidden'}}>
            <div className='bgGym'></div>
            <div className="card card-reserv">
                <h3 className="card-header header-text">Reservation</h3>
                <div className="card-body">
                    <div style={{marginLeft: '6px'}}>
                        <div className="row">
                            <div className="col-sm-4 col-md-3 col-lg-2">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>         
                                    <KeyboardDatePicker         
                                    id="date-picker-dialog"
                                    label="Select date"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>  
                            <div className="col-sm-5 col-md-4 time-select">
                                <TimeSelect />
                            </div>                                
                        </div>                          
                    </div> 
                    <MDBAlert  color='danger' className={error ? '' : ' sr-only'} dismiss>Check the correctness of the entered data</MDBAlert>
                    <MDBBtn onClick={() => this.onSubmit()} className="teal darken-2" style={{marginTop: '160px'}}>Reserve</MDBBtn>
                </div>
            </div>           
         </div>   
        )
    }
}

export default TennisReservation;
