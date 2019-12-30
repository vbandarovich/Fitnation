import React from 'react';
import '../styles/home.css';

class HomePage extends React.Component {

    render() {
        return(
            <div>         
                <div className='bg'></div>
                    <div className="pt-3" style={{marginLeft: '70px'}}>
                    <div className="row">
                        <div className="col-12 col-md-6 col-xl-3">
                            <a href="#!">
                            <div className="card mb-3">
                            <div className="card-img img-tennis"></div>    
                            <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <h4 className="card-title teko">Tennis</h4>
                                <p className="card-text solway">With us you can play table tennis with the whole family, with friends, work colleagues, and even alone - 
                                    you can always find a partner on the spot.</p>
                            </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <a href="#!">
                            <div className="card mb-3">
                            <div className="card-img img-bowling" ></div>    
                            <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <h4 className="card-title teko">Bowling</h4>
                                <p className="card-text solway">Bowling club is equipped with the most modern equipment of the American company "Brunswick". 
                                    6 new tracks that meet strict international standards can satisfy both ordinary fans of this game and professional players.</p>
                            </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <a href="#!">
                            <div className="card mb-3">
                            <div className="card-img img-billiards" ></div>    
                            <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <h4 className="card-title teko">Billiards</h4>
                                <p className="card-text solway">Magnificent tables with playing fields on a special natural stone from Italy will not leave anyone 
                                    indifferent to this old game. For lovers of a relaxed atmosphere, we offers a VIP-billiard room with 8 seats, with a magnificent 
                                    design, where there is Russian billiards, soft armchairs for seats in the form of a sofa with a leather cover, where you can watch 
                                    satellite TV m without playing billiards. </p>
                            </div>
                            </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <a href="#!">
                            <div className="card mb-3">
                            <div className="card-img img-gym"></div>    
                            <div className="card-img-overlay d-flex flex-column justify-content-between">
                                <h4 className="card-title teko">Gym</h4>
                                <p className="card-text solway">We love sports, it makes us stronger, more confident, calmer. We love sports people and want to have more, 
                                    beautiful, attractive. We believe that sport is accessible to everyone. Therefore, we created a fitness club in which there is nothing 
                                    superfluous, for which we have to pay extra. </p>
                            </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;