import React from 'react';
import { authenticationService } from '../../services/authenticationService';
import { handleResponse } from '../../helpers/handleResponce';

class EditingPermissions extends React.Component {
    constructor(props){
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

    render() {
        const{ users } = this.state;

        return(
            <div className='content'>
                <h2>Editing Permissions</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th class="border-top-0">Email</th>
                            <th class="border-top-0">Roles</th>
                            <th class="border-top-0"></th>
                        </tr>
                    </thead>
                   <tbody>
                   {users.map(item => (
                        <tr key={item.id} id={item.id}>
                        <td>{item.email}</td>
                        <td>
                            <button  className="btn btn-sm btn-primary">
                                Show roles
                            </button>
                        </td>
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

export default EditingPermissions;