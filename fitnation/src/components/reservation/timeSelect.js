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
   const { selectedOption, date, time, objNames } = this.state;
    return(
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={time}
        isMulti="true"
        placeholder="Select time range..."
        isDisabled={(date === null || objNames.length === 0) ? true: false}
      />
    )
  }
}

export default TimeSelect;

