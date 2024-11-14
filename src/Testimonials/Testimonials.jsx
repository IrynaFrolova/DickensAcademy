import React from 'react';
import './Testimonials.css';
import womenImage from './women.png';
import menImage from './men.png';
import image1 from './1.png';
import image3 from './3.png';

const Testimonials = () => {
    return (
      <div className="testimonials-container">
        <div className="testimonial-content">
          <div className="testimonial-header">
            <h2>TESTIMONIALS</h2>
          </div>
          <div className="testimonial-body">
            <div className="testimonial-main">
              <div className="testimonial-subcontainer">
                <div className="testimonial-image">
                  <img src={womenImage} alt="Testimonial" />
                </div>
                <div className="testimonial-description">
                  <div className="testimonial-name">
                    <div className="name">Name</div>
                    <div className="role">Role Here</div>
                    <div className="stars"></div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut.
                      Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit
                      rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas.
                      Porttitor urna.
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-subcontainer">
                <div className="testimonial-image">
                  <img src={menImage} alt="Testimonial" />
                </div>
                <div className="testimonial-description">
                  <div className="testimonial-name">
                    <div className="name">Name</div>
                    <div className="role">Role Here</div>
                    <div className="stars"></div>
                  </div>
                  <div className="testimonial-text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut.
                      Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit
                      rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas.
                      Porttitor urna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="testimonial-button">
              <div className="image1">
                <img src={image1} alt="1" />
              </div>
              <div className="image2"></div> 
              <div className="image3">
              <div className="image31"><img src={image3} alt="3" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
