import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

class TimeSelect extends React.Component {

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

