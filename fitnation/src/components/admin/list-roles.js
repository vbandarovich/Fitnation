import React from 'react';
import { authenticationService } from '../../services/authenticationService';
import { handleResponse } from '../../helpers/handleResponce';

class ListRoles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: [],
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

        fetch(`https://localhost:44348/api/role`, requestOptions)
            .then(handleResponse)
            .then(
                (result) => {
                    this.setState({
                        roles: result
                    })
                }     
            )
    }

    render() {
        const { roles } = this.state;

        return(
            <div className='content'>
                <h2>List roles</h2>     
                <table className="table">
                    <thead>
                        <tr>
                            <th className="border-top-0">Role name</th>
                            <th className="border-top-0"></th>
                        </tr>
                    </thead>
                   <tbody>
                   {roles.map(item => (
                        <tr key={item.id} id={item.id}>
                        <td>{item.name}</td>
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

export default ListRoles;