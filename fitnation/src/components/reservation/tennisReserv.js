import React from 'react';
import '../../styles/tennisReservation.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import TimeSelect from './timeSelect';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker } from '@material-ui/pickers';
import UserDataInputs from './userDataInputs';


class TennisReservation extends React.Component {
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
                    document.getElementById('count_').innerHTML = 'Selected tables : '+ Count_Mest ();
                } else if(this.style.background !== 'SlateGray'){
                    this.style.background='red';
                    document.getElementById('count_').innerHTML = 'Selected tables : '+ Count_Mest ();
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
            {
            id: 6,
            reserv: false
            },
            ]

        return(
            <div style={{overflowX: 'hidden'}}>
            <div className='bgTennis'></div>
            <p className='p-date'>Reservation</p>
            <div style={{marginLeft: '100px', marginTop:'15px'}}>
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
            <div className="tennis">
                <div id='count_' className='count'>Selected tables : 0</div>
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
         <div className='timeSelect'>
            <TimeSelect />           
         </div> 
         <div className='user-data'>
            <UserDataInputs /> 
         </div> 
         </div>   
        )
    }
}

export default TennisReservation;