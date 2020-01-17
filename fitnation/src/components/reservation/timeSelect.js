import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

class TimeSelect extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     date: props.date,
  //     type: props.type,
  //     objNames: props.objNames,
  //     time: []
  //   }
  //   this.getTimeReserv = this.getTimeReserv.bind(this);
  // }

  // getTimeReserv = (date, type, objNames) => {
  //   try{
  //       let timeRange = [];
  //       const requestOptions = {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify({"DateReservation": date, "ObjectType": type, 
  //               "ObjectNames": objNames})
  //       };

  //       fetch(`https://localhost:44348/api/checkreservation`, requestOptions)
  //           .then(handleResponse)
  //           .then(
  //               (result) => {
  //                   for(let i =0; i < result.length; i++) {
  //                     timeRange.push({'id':i, 'value': result[i]})
  //                   }

  //                   this.setState({
  //                     time: timeRange
  //                   })
  //               }     
  //           )  
  //   }
  //   catch(ex) {
  //       this.setState({
  //           error: true
  //       })
  //   }    
  // }

  render() {
    let time = [
      { id: 0, value: '9:00 am - 10:00 am'},
      { id: 1, value: '10:00 am - 11:00 am'},
      { id: 2, value: '11:00 am - 12:00 am' },
      { id: 3, value: '12:00 am - 1:00 pm' },
      { id: 4, value: '1:00 pm - 2:00 pm' },
      { id: 5, value: '2:00 pm - 3:00 pm' },
      { id: 6, value: '3:00 pm - 4:00 pm' },
      { id: 7, value: '4:00 pm - 5:00 pm' },
      { id: 8, value: '5:00 pm - 6:00 pm' },
      { id: 9, value: '6:00 pm - 7:00 pm' },
    ];
   
    return(
        <Multiselect
          options={time}
          displayValue='value'
          placeholder="Select time range"
        />
    )
  }
}

export default TimeSelect;

