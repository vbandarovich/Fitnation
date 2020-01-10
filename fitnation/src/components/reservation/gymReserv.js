import React from 'react';
import '../../styles/reservation/gymReservation.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import TimeSelect from './timeSelect';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker } from '@material-ui/pickers';
import { MDBBtn } from 'mdbreact';


class TennisReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null
        }
    }

    render() {
        const { selectedDate } = this.state;

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
                    <MDBBtn className="teal darken-2" style={{marginTop: '160px'}}>Reserve</MDBBtn>
                </div>
            </div>           
         </div>   
        )
    }
}

export default TennisReservation;
