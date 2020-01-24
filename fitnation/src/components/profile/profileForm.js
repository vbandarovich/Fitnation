import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import { authenticationService } from '../../services/authenticationService';
import '../../styles/profile/profile.css';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            userName: '',
            email: '',
            currentUser: authenticationService.currentUserValue,
            error: false
          }
          this.handleChangeUserName = this.handleChangeUserName.bind(this);
          this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    componentDidMount() {
        this.setState({
            userName: authenticationService.currentUserValue.userName,
            email: authenticationService.currentUserValue.email
        })
        if(authenticationService.currentUserValue.phone !== null) {
                this.setState({phone: authenticationService.currentUserValue.phone})
        }
    }

    handleChangeUserName(event) {
        this.setState({userName: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    render() {
        const { userName, email } = this.state;

        return(
            <div className='content'>
                <h2>Profile</h2>
                <MDBRow>
                    <MDBCol size='10' md='6' lg='4'>
                    <label htmlFor="userNameInput">
                        Your user name
                    </label>
                    <input
                        type="text"
                        id="userNameInput"
                        className="form-control"
                        value={userName}
                        onChange={this.handleChangeUserName}
                        ref={ ref => this.userNameInput = ref}
                    />
                    <br />
                    <label htmlFor="emailInput">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="emailInput"
                        className="form-control"
                        value={email}
                        onChange={this.handleChangeEmail}
                        ref={ ref => this.emailInput = ref}
                    />
                    <br />
                    <PhoneInput style={{color: 'black'}}
                        id="phoneInput"
                        country={'us'}
                        value={this.state.phone}
                        onChange={phone => this.setState({ phone })}
                        ref={ ref => this.phoneInput = ref}
                    />
                    <br />
                    </MDBCol>
                    <MDBCol size='10' md='6' lg='4'>
                    <label htmlFor="oldPasswordInput">
                        Your old password
                    </label>
                    <input
                        type="password"
                        id="oldPasswordInput"
                        className="form-control"
                        ref={ ref => this.oldPasswordInput = ref}
                    />
                    <br />
                    <label htmlFor="newPasswordInput">
                        Your new password
                    </label>
                    <input
                        type="password"
                        id="newPasswordInput"
                        className="form-control"
                        ref={ ref => this.newPasswordInput = ref}
                    />
                    <br />
                    </MDBCol>
                </MDBRow>    
                <MDBBtn>Save</MDBBtn>              
            </div>
        )
    }
}

export default ProfileForm;
