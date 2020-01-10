import React from 'react';

import img1 from '../../assets/gallery/1.jpg';   
import img2 from '../../assets/gallery/2.jpg'; 
import img3 from '../../assets/gallery/3.png'; 
import img4 from '../../assets/gallery/4.jpg'; 
import img5 from '../../assets/gallery/5.jpg'; 
import img6 from '../../assets/gallery/6.jpg'; 
import img7 from '../../assets/gallery/7.jpg'; 
import img8 from '../../assets/gallery/8.jpg'; 
import { MDBRow, MDBCol } from 'mdbreact';

class GridImages extends React.Component {

    render() {
        return(
            <MDBRow style={{marginLeft: '7%', marginRight: '3%'}}>
                <MDBCol sm='12' md='6' lg='3' style={{marginTop: '15px', marginBottom: '10px'}}>
                    <img
                        src={img1}
                        alt="First card"
                    />
                </MDBCol>
                <MDBCol sm='12' md='6' lg='3' style={{marginTop: '15px', marginBottom: '10px'}}>
                    <img
                        src={img2}
                        alt="Second card"
                    />
                </MDBCol>
                <MDBCol sm='12' md='6' lg='3' style={{marginTop: '15px', marginBottom: '10px'}}>
                    <img
                        src={img3}
                        alt="Third card"
                    />
                </MDBCol>
                <MDBCol sm='12' md='6' lg='3' style={{marginTop: '15px', marginBottom: '10px'}}>
                    <img
                        src={img4}
                        alt="Fourth card"
                    />
                </MDBCol>
                <MDBCol sm='12' md='6' lg='3' style={{marginTop: '15px', marginBottom: '10px'}}>
                    <img
                        src={img5}
                        alt="Fifth card"
                    />
                </MDBCol>
                <MDBCol sm='12' md='6' lg='3' style={{marginTop: '15px', marginBottom: '10px'}}>
                    <img
                        src={img6}
                        alt="Sixth card"
                    />
                </MDBCol>
                <MDBCol sm='12' md='6' lg='3' style={{marginTop: '15px', marginBottom: '10px'}}>
                    <img
                        src={img7}
                        alt="Seventh card"
                    />
                </MDBCol>
                <MDBCol sm='12' md='6' lg='3' style={{marginTop: '15px', marginBottom: '10px'}}>
                    <img
                        src={img8}
                        alt="Eighth card"
                    />
                </MDBCol>
            </MDBRow>
        )
    }
}

export default GridImages;