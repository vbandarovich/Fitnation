import React from 'react';
import '../../styles/tennisReservation.css';
import { MDBRow, 
    MDBCol, 
    MDBInput, 
    MDBBtn } from 'mdbreact';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

class UserDataInputs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        }
    }

    render() {
        return(
            <MDBRow>
                 <MDBCol xs='10' md='3'>
                    <div>
                        <p>Your email</p>
                        <div className="grey-text"> 
                            <MDBInput id='loginInput'
                                label="Email"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                                ref={ref => this.loginInput = ref}
                                />
                            <p className='black-text'>Your phone</p>
                            <PhoneInput
                                country={'us'}
                                value={this.state.phone}
                                onChange={phone => this.setState({ phone })}
                            />
                        </div>
                        <div className="text-center" style={{marginTop: '20px', marginBottom: '20px'}}>
                            <MDBBtn className="teal darken-2">Reserve</MDBBtn>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default UserDataInputs;