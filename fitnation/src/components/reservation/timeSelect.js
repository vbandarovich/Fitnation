import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

class TimeSelect extends React.Component {

  render() {
    let time = [
      { id: 0, value: '9:00 - 10:00'},
      { id: 1, value: '10:00 - 11:00'},
      { id: 2, value: '11:00 - 12:00' },
      { id: 3, value: '12:00 - 01:00' },
      { id: 4, value: '1:00 - 02:00' },
      { id: 5, value: '2:00 - 03:00' },
      { id: 6, value: '3:00 - 04:00' },
      { id: 7, value: '4:00 - 05:00' },
      { id: 8, value: '5:00 - 06:00' },
      { id: 9, value: '6:00 - 07:00' },
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

