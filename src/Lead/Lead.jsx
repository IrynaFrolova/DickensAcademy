import React from "react";
import "./Lead.css";

const Lead = () => {
  return (
    <div className="lead">
      <div className="frame-136">
        <div className="text-container">
          <h1 className="text-heading">
            COMPANIES, UNIVERSITIES, DIRECTORS AND PRESIDENTS
          </h1>
          <p className="text-paragraph">
            If you'd like to learn more information about our work with large
            organizations, let's schedule a call.
          </p>
        </div>

        <form className="form">
          <div className="form-lead">
            <div className="input">
              <input type="text" placeholder="Name" />
            </div>
            <div className="input">
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <button type="submit" className="button">
            <span className="button-text">Schedule a call</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lead;
