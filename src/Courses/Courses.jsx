import React from "react";
import "./Courses.css";
import levelImage from "./level.png";
import detailsImage from "./details.png";
import hourImage from "./hour.png";    
import onlineImage from "./online.png";
import englishImage from "./english.png"; 
import yesImage from "./yes.png";
import imgImage from "./image.png"
import modulesImage from "./modules.png"

const Courses = () => {
  return (
    <div className="courses">
      <div className="courses-container">
        <div className="sub-container">
          <h2 className="sub-container-heading">OUR COURSES</h2>
        </div>
        <div className="cards">
        <div className="cards1">
          <div className="cards1-header">
            <div className="level">
              <img src={levelImage} alt="Level" className="level-image" />
              <div className="level-text">
                <h4>LEVEL 1 (ACC TRACK) EXPERIENTIAL EXECUTIVE COACHING PROGRAM</h4>
              </div>
            </div>
            <div className="details">
              <img src={detailsImage} alt="Details" className="details-image" />
              <p className="details-text">DETAILS</p>
            </div>
          </div>
          <div className="cards1-time">
            <div className="hour">
              <img src={hourImage} alt="Hour" className="icon" />
              <p className="text">60-hour</p>
            </div>
            <div className="online">
              <img src={onlineImage} alt="Online" className="icon" />
              <p className="text">Online</p>
            </div>
            <div className="english">
              <img src={englishImage} alt="English" className="icon" />
              <p className="text">English</p>
            </div>
          </div>
          <div className="cards1-list">
            {/* frame126 — контейнер */}
            <div className="frame126">
  <div className="coaching-models">
    <p className="coaching-text">THE THREE PRIMARY COACHING PROGRAM MODELS</p>
  </div>
  <div className="program-containers">
    <div className="program-container">
      <div className="first-container">
        <p className="first-container-text">Level 1 (ACC Track) Experiential Executive Coaching Program</p>
      </div>
      <div className="second-container">
      <div className="sub-containersecond">
              <img src={yesImage} alt="yes icon" className="iconyes" />
              <p className="sub-container-text">In-depth exploration of coaching foundations</p>
            </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Mastery in effective communication strategies</p>
            </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Proficiency in navigating ICF Core Competencies</p>
        </div>
      </div>
    </div>
    <div className="program-container">
      <div className="first-container">
        <p className="first-container-text">Level 1 (ACC Track) Experiential Executive Coaching Program</p>
      </div>
      <div className="second-container">
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Illustrates how coaching candidates acquire the necessary skills, tips, tools, and techniques for certification</p>
        </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom</p>
        </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Through practice and repetition, candidates achieve competence and transcendence in their coaching abilities</p>
        </div>
      </div>
    </div>
    <div className="program-container">
      <div className="first-container">
        <p className="first-container-text">3. The Coaching Engagement Model</p>
      </div>
      <div className="second-container">
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Provides a structured framework for coaching sessions</p>
        </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Guides coaches and clients through phases of awareness, discovery, goal setting, approach determination, progress tracking, and success evaluation</p>
        </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Serves as a roadmap for the engagement, fostering clarity and mutual expectations between coach and client</p>
        </div>
      </div>
    </div>
  </div>
</div>

            <div className="price">
              <p className="price-text">PRICE</p>
              <img src={imgImage} alt="price icon" className="price-icon" />
              <p className="price-amount">$6 499</p>
            </div>
            </div>
            <div className="cards1-join">
              <button className="join-button">Join</button>
            </div>
            </div>
            </div>



        <div className="cards2">
        <div className="cards1">
          <div className="cards1-header">
            <div className="level">
              <img src={levelImage} alt="Level" className="level-image" />
              <div className="level-text">
                <h4>LEVEL 2 (PCC TRACK) EXPERIENTIAL EXECUTIVE COACHING PROGRAM</h4>
              </div>
            </div>
            <div className="details">
              <img src={detailsImage} alt="Details" className="details-image" />
              <p className="details-text">DETAILS</p>
            </div>
          </div>
          <div className="cards1-time">
            <div className="hour">
              <img src={hourImage} alt="Hour" className="icon" />
              <p className="text">125 hours</p>
            </div>
            <div className="modules">
              <img src={modulesImage} alt="modules" className="icon" />
              <p className="text">9 modules</p>
            </div>
            <div className="online">
              <img src={onlineImage} alt="Online" className="icon" />
              <p className="text">Online</p>
            </div>
            <div className="english">
              <img src={englishImage} alt="English" className="icon" />
              <p className="text">English</p>
            </div>
          </div>
          <div className="cards1-list">
            {/* frame126 — контейнер */}
            <div className="frame126">
  <div className="coaching-models">
    <p className="coaching-text">THE THREE PRIMARY COACHING PROGRAM MODELS</p>
  </div>
  <div className="program-containers">
    <div className="program-container">
      <div className="first-container">
        <p className="first-container-text">1.The Coaching Certification Model</p>
      </div>
      <div className="second-container">
      <div className="sub-containersecond">
              <img src={yesImage} alt="yes icon" className="iconyes" />
              <p className="sub-container-text">The program offers three pathways to proficiency: coaching, receiving coaching, or observing coaching sessions</p>
            </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Emphasizes three core areas: ICF Ethics, ICF Regulations, and ICF Core Competencies</p>
            </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Candidates focus on enhancing skills in performance coaching, behavioral coaching, and perceptual coaching</p>
        </div>
      </div>
    </div>
    <div className="program-container">
      <div className="first-container">
        <p className="first-container-text">2.The Coach’s Learning Model</p>
      </div>
      <div className="second-container">
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Illustrates how coaching candidates acquire the necessary skills, tips, tools, and techniques for certification</p>
        </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom</p>
        </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Through practice and repetition, candidates achieve competence and transcendence in their coaching abilities</p>
        </div>
      </div>
    </div>
    <div className="program-container">
      <div className="first-container">
        <p className="first-container-text">3.The Coaching Engagement Model</p>
      </div>
      <div className="second-container">
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Provides a structured framework for coaching sessions</p>
        </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Guides coaches and clients through phases of awareness, discovery, goal setting, approach determination, progress tracking, and success evaluation</p>
        </div>
        <div className="sub-containersecond">
            <img src={yesImage} alt="yes icon" className="iconyes" />
            <p className="sub-container-text">Serves as a roadmap for the engagement, fostering clarity and mutual expectations between coach and client</p>
        </div>
      </div>
    </div>
  </div>
</div>

            <div className="price">
              <p className="price-text">PRICE</p>
              <img src={imgImage} alt="price icon" className="price-icon" />
              <p className="price-amount">$8 499</p>
            </div>
            </div>
            <div className="cards1-join">
              <button className="join-button">Join</button>
            </div>
            </div>






            
        </div>
      </div>
    </div>
  );
};

export default Courses;
