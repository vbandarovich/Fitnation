import React from 'react';
import { authenticationService } from '../../services/authenticationService';
import { handleResponse } from '../../helpers/handleResponce';
import { MDBBtn, MDBInput } from 'mdbreact';

class ListRoles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: [],
            error: false,
            isVisible: false,
            currentUser: authenticationService.currentUserValue
        }
        this.OnChange = this.OnChange.bind(this);
        this.OnCreate = this.OnCreate.bind(this);
        this.OnDelete = this.OnDelete.bind(this);
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

    OnChange = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    OnCreate = () => {
        let roleName = this.roleNameInput.state.innerValue;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.currentUser.token}` },
            body: JSON.stringify({"RoleName": roleName})
        };

        fetch(`https://localhost:44348/api/role`, requestOptions)
            .then(handleResponse)
            .then(
                (result) => {
                    this.setState({
                        roles: result,
                        isVisible: false
                    })
                }     
            )
        this.roleNameInput.state.innerValue = '';
    }

    OnDelete = (roleId) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json',
            Authorization: `Bearer ${this.state.currentUser.token}` }
        };

        fetch(`https://localhost:44348/api/role/${roleId}`, requestOptions)
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
        const { roles,isVisible } = this.state;

        return(
            <div className='content'>
                <h2>List roles</h2>   
                <div className={isVisible ? 'row' : 'row sr-only'}>
                    <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                        <MDBInput type='text' id='roleNameInput' label='Enter new role' style={{marginTop: '0px'}} ref={ref => this.roleNameInput = ref}></MDBInput>
                    </div> 
                    <div className='col-6 col-sm-4 col-md-3 col-lg-2'>
                        <MDBBtn onClick={()=> this.OnCreate()} color='success' size='sm' style={{marginTop: '25px'}}>Add role</MDBBtn>
                    </div>             
                </div>  
                <table className="table">
                    <thead>
                        <tr>
                            <th className="border-top-0">Role name</th>
                            <th className="border-top-0">
                                <MDBBtn onClick={() => this.OnChange()} color='primary' size='sm'>{isVisible ? 'Hide form' : 'Add role'}</MDBBtn>
                            </th>
                        </tr>
                    </thead>
                   <tbody>
                   {roles.map(item => (
                        <tr key={item.id} id={item.id}>
                        <td>{item.name}</td>
                        <td>
                            <button onClick={()=> this.OnDelete(item.id)}  className="btn btn-sm btn-danger">
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