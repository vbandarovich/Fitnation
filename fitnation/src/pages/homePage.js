import React from 'react';
import '../styles/home.css';

class HomePage extends React.Component {

    render() {
        return(
            <div>         
                <div className='bg'></div>
                    <div className="pt-3" style={{marginLeft: '70px'}}>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="card mb-3">
                            <div className="card-img img-tennis"></div>    
                            <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <h4 className="card-title">Tennis</h4>
                                <p className="card-text oswald">Some content here.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card mb-3">
                            <div className="card-img img-bowling" ></div>    
                            <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <h4 className="card-title">Bowling</h4>
                                <p className="card-text oswald">Lorem ipsum dolor sit amet, eu duo adhuc graeci praesent, nec legendos volutpat facilisis cu. Id mea dolores salutatus omittantur, mea in purto deleniti oporteat, dicit dicunt ius et.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card mb-3">
                            <div className="card-img img-billiards" ></div>    
                            <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <h4 className="card-title">Billiards</h4>
                                <p className="card-text oswald">Lorem ipsum dolor sit amet, eu duo adhuc graeci praesent, nec legendos volutpat facilisis cu. </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card mb-3">
                            <div className="card-img img-gym"></div>    
                            <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <h4 className="card-title">Gym</h4>
                                <p className="card-text oswald">Lorem ipsum dolor sit amet, eu duo adhuc graeci praesent, nec legendos volutpat facilisis cu. </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;