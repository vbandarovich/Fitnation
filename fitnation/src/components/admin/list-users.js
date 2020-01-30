import React from 'react';
import { authenticationService } from '../../services/authenticationService';
import { handleResponse } from '../../helpers/handleResponce';

class ListUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: false,
            currentUser: authenticationService.currentUserValue
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.currentUser.token}` }
        };

        fetch(`https://localhost:44348/api/user`, requestOptions)
            .then(handleResponse)
            .then(
                (result) => {
                    this.setState({
                        users: result
                    })
                }     
            )
    }

    OnDelete = (userId) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.currentUser.token}` }
        };

        fetch(`https://localhost:44348/api/user/${userId}`, requestOptions)
            .then(handleResponse)
            .then(
                (result) => {
                    this.setState({
                        users: result
                    })
                }     
            )
    }

    render() {
        const { users } = this.state;

        return(
            <div className='content'>
                <h2>List users</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="border-top-0">Email</th>
                            <th className="border-top-0"></th>
                        </tr>
                    </thead>
                   <tbody>
                   {users.map(item => (
                        <tr key={item.id}>
                        <td>{item.email}</td>
                        <td>
                            <button onClick={()=> this.OnDelete(item.id)} className="btn btn-sm btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr> 
                    ))}
                   </tbody>                  
                </table>
            </div>
        )
    }
}

export default ListUsers;