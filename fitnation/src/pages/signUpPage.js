import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { MDBContainer, 
    MDBRow, 
    MDBCol,
    MDBBtn,
    MDBAlert } from 'mdbreact';
import Navbar from '../components/navbar/navbar';
import Sidenav from '../components/sidenav/sidenav';
import { authenticationService } from '../services/authenticationService'; 
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';   

class SignUpPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            redirect: false,
            error: false
          }
        this.updateState = this.updateState.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
    }

    updateState = (value) => {
        this.setState({ 
          expanded: value
        })
    }

    OnSubmit = () => {
        let userName = this.userNameInput.value;
        let email = this.emailInput.value;
        let phone = this.phoneInput.props.value;
        let password = this.passwordInput.value;
        let confirmPassword = this.confirmPasswordInput.value;

        if(password === confirmPassword) {   
            try {
                authenticationService.register(userName, email, phone, password)
                .then( 
                    (user) => {
                        if(user !== null) {
                            this.setState({
                                redirect: true
                            })
                        } else {
                            this.setState({
                                error: true
                            })
                        }
                    }
                );
            }
            catch(ex) {
                this.setState({
                    error: true
                })
            }
                
        } else {
            this.setState({
                error: true
            })
        }
    }

    render() {
        const{ error, redirect } = this.state;

        if(redirect) {
            return <Redirect to="/" />;
        } else {
            return(
                <BrowserRouter>
                <Navbar expanded={this.state.expanded} />
                <Sidenav updateState={this.updateState} selected='profile/signUp'/>
                <div className="mt-0 pt-0" style = {{height:"100vh",backgroundColor: "#26a69a", marginLeft: '64px'}}>
                <MDBContainer>
                    <MDBRow className="text-white">
                        <MDBCol md="6" className="mx-auto" style={{marginTop:'10%'}}>
                        <div>
                            <p className="h2 text-center mb-4">Sign Up</p>
                            <div className="text-white">
                            <label htmlFor="userNameInput">
                                Your user name
                            </label>
                            <input
                                type="text"
                                id="userNameInput"
                                className="form-control"
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
                            <label htmlFor="passwordInput">
                                Your password
                            </label>
                            <input
                                type="password"
                                id="passwordInput"
                                className="form-control"
                                ref={ ref => this.passwordInput = ref}
                            />
                            <br />
                            <label htmlFor="confirmPasswordInput">
                                Confirm password
                            </label>
                            <input
                                type="password"
                                id="confirmPasswordInput"
                                className="form-control"
                                ref={ ref => this.confirmPasswordInput = ref}
                            />
                            <br />
                            </div>
                            <MDBAlert  color='danger' className={error ? '' : ' sr-only'} dismiss>Check the correctness of the entered data</MDBAlert>
                            <div className="text-center">
                            <MDBBtn onClick={()=> this.OnSubmit()} className="teal darken-2">Sign Up</MDBBtn>
                            </div>
                        </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                </div>
                </BrowserRouter>     
            )
        }
        
    }
}

export default SignUpPage