import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MDBContainer, 
    MDBRow, 
    MDBCol, 
    MDBInput, 
    MDBBtn,
    MDBAlert } from 'mdbreact';
import Navbar from '../components/navbar/navbar';
import Sidenav from '../components/sidenav/sidenav';    

class SignInPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            error: false
          }
        this.updateState = this.updateState.bind(this);
    }

    updateState = (value) => {
        this.setState({ 
          expanded: value
        })
    }

    render() {
        const{ error } = this.state;
        return(
                <BrowserRouter>
                <Navbar expanded={this.state.expanded}/>
                <Sidenav updateState={this.updateState}/>
                <div className="mt-0 pt-0" style = {{height:"100vh", backgroundColor: "#26a69a", marginLeft: '64px'}}>
                <MDBContainer>
                            <MDBRow className="text-white">
                                <MDBCol md="6" className="mx-auto" style={{marginTop:'10%'}}>
                                <div>
                                    <p className="h5 text-center mb-4">Sign In</p>
                                    <div className="grey-text">
                                    <MDBInput className="text-white" id='loginInput'
                                        label="Email"
                                        labelClass="text-white"
                                        icon="envelope"
                                        size="sm"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        ref={ref => this.loginInput = ref}
                                    />
                                    <MDBInput className={'text-white' + (error ? ' is-invalid' : '')} id="passwordInput" name="password"
                                        label="Password"
                                        labelClass="text-white"
                                        icon="lock"
                                        size="sm"
                                        group
                                        type="password"
                                        required
                                        ref={ ref => this.passwordInput = ref}
                                    />
                                    </div>
                                    <MDBAlert  color='danger' className={error ? '' : ' sr-only'} dismiss>Check the correctness of the entered data</MDBAlert>
                                    <div className="text-center">
                                    <MDBBtn className="teal darken-2" >Sign In</MDBBtn>
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

export default SignInPage