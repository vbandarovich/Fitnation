import React from 'react';
import { MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon } from 'mdbreact';

class MapComponent extends React.Component {

    render() {
        return(
            <MDBCol size='10' md="5">
                <div
                id="map-container"
                className="rounded z-depth-1-half map-container"
                style={{ height: "400px" }}
                >
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d635.6104728727653!2d-74.00085974417637!3d40.729242615694794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1578647067649!5m2!1sru!2sby"
                    allowfullscreen=""
                    title="Find us"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    />
                </div>
                <br />
                <MDBRow className="text-center">
                    <MDBCol md="4">
                    <MDBBtn tag="a" floating style={{backgroundColor: "#2BBBAD"}}>
                        <MDBIcon icon="map-marker-alt" />
                    </MDBBtn>
                    <p>New York, 94126</p>
                    <p className="mb-md-0">United States</p>
                    </MDBCol>
                    <MDBCol md="4">
                    <MDBBtn tag="a" floating style={{backgroundColor: "#2BBBAD"}}>
                        <MDBIcon icon="phone" />
                    </MDBBtn>
                    <p>+ 01 234 567 89</p>
                    <p className="mb-md-0">Mon - Sun, 8:00 AM - 07:00 PM</p>
                    </MDBCol>
                    <MDBCol md="4">
                    <MDBBtn tag="a" floating style={{backgroundColor: "#2BBBAD"}}>
                        <MDBIcon icon="envelope" />
                    </MDBBtn>
                    <p>fitnation@gmail.com</p>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        )
    }
}

export default MapComponent;