import React from 'react';
import { MDBRow, 
    MDBCol, 
    MDBBtn, 
    MDBIcon } from 'mdbreact';
import MapComponent from './mapComponent'; 
import '../../styles/contact/contactForm.css';   

class ContactForm extends React.Component {

    render() {
        return(
            <MDBRow style={{marginLeft: '70px', marginTop: '15px'}}>
                <MDBCol size='10' md="6">
                <div>
                    <p className=" header text-center mb-4">Write to us</p>
                    <label htmlFor="defaultFormContactNameEx" className="grey-text">
                    Your name
                    </label>
                    <input
                    type="text"
                    id="defaultFormContactNameEx"
                    className="form-control"
                    />
                    <br />
                    <label
                    htmlFor="defaultFormContactSubjectEx"
                    className="grey-text"
                    >
                    Subject
                    </label>
                    <input
                    type="text"
                    id="defaultFormContactSubjectEx"
                    className="form-control"
                    />
                    <br />
                    <label
                    htmlFor="defaultFormContactMessageEx"
                    className="grey-text"
                    >
                    Your message
                    </label>
                    <textarea
                    type="text"
                    id="defaultFormContactMessageEx"
                    className="form-control"
                    rows="3"
                    />
                    <div className="text-center mt-4">
                    <MDBBtn className='default-color-dark' outline type="submit" style={{marginBottom: '20px'}}>
                        Send
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                    </div>
                </div>
                </MDBCol>
                <MapComponent />
            </MDBRow>
        )
    }
}

export default ContactForm;