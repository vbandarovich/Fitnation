import React from 'react';
import { authenticationService } from '../../services/authenticationService';
import { handleResponse } from '../../helpers/handleResponce';

class ListModerators extends React.Component {
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

        fetch(`https://localhost:44348/api/admin`, requestOptions)
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
                <h2>List moderators</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="border-top-0">Email</th>
                            <th className="border-top-0"></th>
                        </tr>
                    </thead>
                   <tbody>
                   {users.map(item => (
                        <tr key={item} id={item}>
                        <td>{item}</td>
                        <td>
                            <button  className="btn btn-sm btn-danger">
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

export default ListModerators;