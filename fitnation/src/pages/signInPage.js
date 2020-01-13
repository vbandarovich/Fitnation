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

class SignInPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            error: false,
            redirect: false
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
        let email = this.emailInput.value;
        let password = this.passwordInput.value;
        if(email !== null && password !== null) {   
            try {
                authenticationService.login(email, password)
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
                <Navbar expanded={this.state.expanded}/>
                <Sidenav updateState={this.updateState} selected='profile/signIn'/>
                <div className="mt-0 pt-0" style = {{height:"100vh", backgroundColor: "#26a69a", marginLeft: '64px'}}>
                <MDBContainer>
                            <MDBRow className="text-white">
                                <MDBCol md="6" className="mx-auto" style={{marginTop:'10%'}}>
                                <div>
                                    <p className="h2 text-center mb-4">Sign In</p>
                                    <div className="text-white">
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
                                    <label htmlFor="passwordInput">
                                         Your password
                                    </label>
                                    <input
                                        className={'form-control' + (error ? ' is-invalid' : '')}
                                        type="password"
                                        id="passwordInput"
                                        ref={ ref => this.passwordInput = ref}
                                    />
                                    <br />
                                    </div>
                                    <MDBAlert  color='danger' className={error ? '' : ' sr-only'} dismiss>Check the correctness of the entered data</MDBAlert>
                                    <div className="text-center">
                                    <MDBBtn onClick={()=> this.OnSubmit()} className="teal darken-2" >Sign In</MDBBtn>
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

export default SignInPage