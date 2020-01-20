import React from 'react';
import Select from 'react-select';
import { handleResponse } from '../../helpers/handleResponce';

class TimeSelect extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: props.date,
      type: props.type,
      objNames: props.objNames,
      selectedOption: null,
      time: []
    }
    this.getTimeReserv = this.getTimeReserv.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props !== prevProps) {
      this.setState({
        date: this.props.date,
        objNames: this.props.objNames
      })
      this.getTimeReserv(this.props.date, this.props.type, this.props.objNames);
    }
  }
  getTimeReserv = (date, type, objNames) => {
    try{
      let timeRange = [];
      if(date !== null && objNames.length !== 0) {      
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"DateReservation": date, "ObjectType": type, 
                "ObjectNames": objNames})
        };

      fetch(`https://localhost:44348/api/checkreservation`, requestOptions)
          .then(handleResponse)
          .then( (result) => {
                  for(let i =0; i < result.length; i++) {
                    timeRange.push({'id':i, 'label': result[i], 'value': result[i]})
                  }
                  this.setState({...this.state, time: timeRange })
                }     
            )  
      }
    }
    catch(ex) {
        this.setState({
            error: true
        })
    }    
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    // let time = [
    //   { id: 0, label:'9:00 am - 10:00 am', value: '9:00 am - 10:00 am'},
    //   { id: 1, label:'10:00 am - 11:00 am', value: '10:00 am - 11:00 am'},
    //   { id: 2, label:'11:00 am - 12:00 am', value: '11:00 am - 12:00 am' },
    //   { id: 3, label:'12:00 am - 1:00 pm', value: '12:00 am - 1:00 pm' },
    //   { id: 4, label:'1:00 pm - 2:00 pm', value: '1:00 pm - 2:00 pm' },
    //   { id: 5, label:'2:00 pm - 3:00 pm', value: '2:00 pm - 3:00 pm' },
    //   { id: 6, label:'3:00 pm - 4:00 pm', value: '3:00 pm - 4:00 pm' },
    //   { id: 7, label:'4:00 pm - 5:00 pm', value: '4:00 pm - 5:00 pm' },
    //   { id: 8, label:'5:00 pm - 6:00 pm', value: '5:00 pm - 6:00 pm' },
    //   { id: 9, label:'6:00 pm - 7:00 pm', value: '6:00 pm - 7:00 pm' },
    // ];
   
   const { selectedOption, date, time } = this.state;
    return(
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={time}
        isMulti="true"
        placeholder="Select time range..."
        isDisabled={(date === null) ? true: false}
      />
    )
  }
}

export default TimeSelect;

