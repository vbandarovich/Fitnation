import React from 'react';
import '../../styles/tennisReservation.css';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


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

        for(let i=0;i<l.length;i++) {
            l[i].onclick = function(){
                if(this.style.background === 'red') {
                    this.style.background='silver';
                    document.getElementById('count_').innerHTML = 'Selected tables : '+Count_Mest ();
                } else {
                    this.style.background='red';
                    document.getElementById('count_').innerHTML = 'Selected tables : '+Count_Mest ();
                }
                
            }
        }

        const handleDateChange = date => {
            this.setState({
                selectedDate: date
            })
          };

        return(
            <div style={{marginLeft: '80px'}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>          
                    <KeyboardDatePicker style={{marginRight: '30px'}}
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                    <KeyboardTimePicker
                    margin="normal"
                    marginLeft="40px"
                    id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    />
             </MuiPickersUtilsProvider>
            <div className="tennis">
                <div id='count_'>Selected tables : 0</div>
                <div className="row">
                    <div className="mesta">
                        <div style={{marginTop: '13px'}}>1</div>
                    </div>
                    <div className="mesta">
                        <div style={{marginTop: '13px'}}>2</div>
                    </div>
                    <div className="mesta">
                        <div style={{marginTop: '13px'}}>3</div>
                    </div>
                    <div className="mesta">
                        <div style={{marginTop: '13px'}}>4</div>
                    </div>
                    <div className="mesta">
                        <div style={{marginTop: '13px'}}>5</div>
                    </div>
                    <div className="mesta">
                        <div style={{marginTop: '13px'}}>6</div>
                    </div>
                </div>
            </div>
         </div>    
        )
    }
}

export default TennisReservation;