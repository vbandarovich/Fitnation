import React from 'react';
import '../../styles/reservation/bowlingReservation.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import TimeSelect from './timeSelect';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker } from '@material-ui/pickers';
import { MDBBtn } from 'mdbreact';


class BowlingReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null
        }
    }

    render() {
        const { selectedDate } = this.state;
        var l = document.getElementsByClassName('mesta'); 

        function Count_Mest (){
            let z_mest = 0;
                for(let i = 0; i < l.length; i++){
                    if(l[i].style.background === 'red'){
                        z_mest++;
                    }
                }
            return z_mest;
        }

        for(let i = 0; i < l.length; i++) {
            l[i].onclick = function(){
                if(this.style.background === 'red') {
                    this.style.background='silver';
                    document.getElementById('count_').innerHTML = 'Selected boyling alleys : '+ Count_Mest ();
                } else if(this.style.background !== 'SlateGray'){
                    this.style.background='red';
                    document.getElementById('count_').innerHTML = 'Selected boyling alleys : '+ Count_Mest ();
                } 
            }
        }

        const handleDateChange = date => {
            this.setState({
                selectedDate: date
            })
        };

        const mesta = [
            {
            id: 1,
            reserv: false
            },
            {
            id: 2,
            reserv: false
            },
            {
            id: 3,
            reserv: false
            },
            {
            id: 4,
            reserv: false
            },
            {
            id: 5,
            reserv: false
            },
            ]

        return(
            <div style={{overflowX: 'hidden', overflowY: 'hidden'}}>
            <div className='bgBowling'></div>
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
                        <div className="tennis">
                            <div id='count_' className='count'>Selected boyling alleys : 0</div>
                            <div className="row">
                                {mesta.map(item => (
                                    <div key={item.id} 
                                    className='mesta' 
                                    style={{backgroundColor: item.reserv ? 'SlateGray' : 'silver'}}> 
                                    <div style={{marginTop: '13px'}}>{item.id}</div>
                                    </div>
                                ))}
                            </div>        
                        </div>           
                    </div> 
                    <MDBBtn className="teal darken-2" style={{marginTop: '30px'}}>Reserve</MDBBtn>
                </div>
            </div>           
         </div>   
        )
    }
}

export default BowlingReservation;