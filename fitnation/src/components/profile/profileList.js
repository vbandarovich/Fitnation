import React from 'react';
import { MDBTable, 
    MDBTableBody, 
    MDBTableHead, 
    MDBBtn} from 'mdbreact';
import { authenticationService } from '../../services/authenticationService';
import { handleResponse } from '../../helpers/handleResponce';

class ProfileList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            error: false,
            currentUser: authenticationService.currentUserValue
          }
    }

    componentDidMount() {
        try {
            const { currentUser } = this.state;
            let userId = currentUser.id;
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };

            fetch(`https://localhost:44348/api/reservation?id=${userId}`, requestOptions)
            .then(handleResponse)
            .then(
                (result) => {
                    this.setState({
                        reservations: result
                    })
                }     
            )
        } 
        catch (error) {
            this.setState({
                error: true
            })
        } 
    }

    render() {
        const { reservations, error } = this.state;
        let number = 0;
        if(!error && reservations.length > 0) {
            return(
                <div className='tableMargin'>
                <MDBTable>
                <MDBTableHead color="primary-color" textWhite>
                    <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th></th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {reservations.map(item => (
                        <tr key={++number}>
                            <td>{number}</td>
                            <td>{item.date}</td>
                            <td>{item.type}</td>
                            <td>{item.name}</td>
                            <td>{item.time}</td>
                            <td id={item.id}>
                                <MDBBtn color='red' size='sm'>Delete</MDBBtn>
                            </td>
                        </tr>
                    ))}             
                </MDBTableBody>
                </MDBTable>
                </div>
            )
        } else {
            return(
                <div className='tableMargin'>
                <MDBTable>
                <MDBTableHead color="primary-color" textWhite>
                    <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Time</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                </MDBTableBody>
                </MDBTable>
                </div>
            )
        }
    }
}

export default ProfileList;