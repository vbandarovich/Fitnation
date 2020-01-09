import React from "react";
import { MDBCarousel, 
    MDBCarouselInner, 
    MDBCarouselItem, 
    MDBView } from "mdbreact"; 
import '../../styles/gallery/carousel.css';

import img1 from '../../assets/gallery/1.jpg';   
import img2 from '../../assets/gallery/2.jpg'; 
import img3 from '../../assets/gallery/3.png'; 
import img4 from '../../assets/gallery/4.jpg'; 
import img5 from '../../assets/gallery/5.jpg'; 
import img6 from '../../assets/gallery/6.jpg'; 
import img7 from '../../assets/gallery/7.jpg'; 
import img8 from '../../assets/gallery/8.jpg';   

class CarouselComponent extends React.Component {

    render() {
        return(
            <div className='carousel'>
                <MDBCarousel
                    activeItem={1}
                    length={8}
                    showControls={true}
                    showIndicators={false}
                    className="z-depth-1"
                    slide
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                            <img
                                src={img1}
                                alt="First slide"
                            />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                            <img
                                src={img2}
                                alt="Second slide"
                            />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                            <img
                                src={img3}
                                alt="Third slide"
                            />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="4">
                            <MDBView>
                            <img
                                src={img4}
                                alt="Fourth slide"
                            />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="5">
                            <MDBView>
                            <img
                                src={img5}
                                alt="Fifth slide"
                            />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="6">
                            <MDBView>
                            <img
                                src={img6}
                                alt="Sixth slide"
                            />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="7">
                            <MDBView>
                            <img
                                src={img7}
                                alt="Seventh slide"
                            />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="8">
                            <MDBView>
                            <img
                                src={img8}
                                alt="Eighth slide"
                            />
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>
        )
    }
}    

export default CarouselComponent;