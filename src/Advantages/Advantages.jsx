import React from 'react';
import './Advantages.css';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="advantagesContainer">
                <div className="textContainer">
                    <h2 className="advantagesTitle">ADVANTAGES</h2>
                </div>
                <div className="itemsContainer">

                    <div className="card">
                        <div className="cardTextContainer">
                            <div className="speisRocket2">
                                <img src={card1} alt="Rocket icon" className="icon" />
                                <p className="cardTitle">LAUNCH YOUR COACHING CAREER</p>
                                <p className="cardDescription">A comprehensive course track to ICF credentialing</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTextContainer">
                            <div className="lightBulbShine">
                                <img src={card2} alt="Light Bulb icon" className="icon" />
                                <p className="cardTitle">COACHING IN THE WORKPLACE</p>
                                <p className="cardDescription">Serve as a thought leader within your organization</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTextContainer">
                            <div className="readBookLight">
                                <img src={card3} alt="Book icon" className="icon" />
                                <p className="cardTitle">CONTINUING COACHING EDUCATION</p>
                                <p className="cardDescription">Beginner or a seasoned pro, you'll find a course right for you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
