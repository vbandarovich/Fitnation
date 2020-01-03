import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';



class TimeSelect extends React.Component {

  render() {
    let time = [
      { id: 0, value: '9:00 - 9:45'},
      { id: 1, value: '10:00 - 10:45'},
      { id: 2, value: '11:00 - 11:45' },
      { id: 3, value: '12:00 - 12:45' },
      { id: 4, value: '1:00 - 1:45' },
      { id: 5, value: '2:00 - 2:45' },
      { id: 6, value: '3:00 - 3:45' },
      { id: 7, value: '4:00 - 4:45' },
      { id: 8, value: '5:00 - 5:45' },
      { id: 9, value: '6:00 - 6:45' },
    ];

    return(
      <div className='row'>
        <div className='col-10 col-sm-5 col-md-3'>
          <p className='p-time'>Select time for table 1</p>
          <Multiselect
            options={time}
            displayValue='value'
            placeholder="Select time range"
          />
        </div>
        <div className='col-10 col-sm-5 col-md-3'>
          <p className='p-time'>Select time for table 2</p>
          <Multiselect
            options={time}
            displayValue='value'
            placeholder="Select time range"
          />
        </div>
        <div className='col-10 col-sm-5 col-md-3'>
          <p className='p-time'>Select time for table 3</p>
          <Multiselect
            options={time}
            displayValue='value'
            placeholder="Select time range"
          />
        </div>
      </div>   
    )
  }
}

export default TimeSelect;

