import React from "react";
import "./Faq.css";
import iconImage from "./1.png"; 


const Faq = () => {
    return (
      <div className="faq-container">
        <div className="faq-inner-container">
          <div className="faq-title-container">
            <h2 className="faq-title">FAQ</h2>
          </div>
          <div className="faq-content-container">
            <div className="faq-box1">
              <div className="faq-box1-inner">
                <div className="faq-box1-text-container">
                  <div className="faq-box1-text1">
                    Lorem ipsum dolor sit amet consectetur. Bibendum proin
                  </div>
                  <div className="faq-divider"></div>
                  <div className="faq-box1-text2">
                    Lorem ipsum dolor sit amet consectetur. Ipsum lacus nulla in
                    eget sit. Lacus iaculis sed mollis mi massa tortor scelerisque
                    sed amet. Turpis et sit tincidunt eget. Dolor nisl fermentum
                    cras erat nisl facilisis. Et.
                  </div>
                </div>
                <div className="faq-box1-image-container">
                  <img src={iconImage} alt="icon" />
                </div>
              </div>
              <div className="faq-box1-footer">
              <div className="faq-box1-text1">
                    Lorem ipsum dolor sit amet consectetur. Bibendum proin
                  </div>
                  <div className="faq-box1-image-container-footer">
                  <img src={iconImage} alt="icon" />
                </div>
              </div>
              <div className="faq-box1-footer">
              <div className="faq-box1-text1">
                    Lorem ipsum dolor sit amet consectetur. Bibendum proin
                  </div>
                  <div className="faq-box1-image-container-footer">
                  <img src={iconImage} alt="icon" />
                </div>
              </div>
              <div className="faq-box1-footer">
              <div className="faq-box1-text1">
                    Lorem ipsum dolor sit amet consectetur. Bibendum proin
                  </div>
                  <div className="faq-box1-image-container-footer">
                  <img src={iconImage} alt="icon" />
                </div>
              </div>
            </div>
            <div className="faq-box2">
                <div className="ask-question">ASK YOUR QUESTION</div>
                <div className="faq2-divider"></div>
                <div className="faq2-contact">
                    <div className="input">
                        <input type="name" placeholder="Name" />
                    </div>
                    <div className="input">
                        <input type="name" placeholder="Email" />
                    </div>
                    <div className="inputenter">
                        <textarea  type="enter" placeholder="Enter Your Question Here ....." />
                    </div>
                </div>
                <button type="submit" className="button">
                    <span className="button-text">Send your message</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Faq;