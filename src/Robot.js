import React from "react";
import Average from "./Average";
import "./Robot.css";

class Robot extends React.Component {
  render() {
    const {
      city,
      company,
      email,
      firstName,
      grades,
      id,
      lastName,
      pic,
      skill
    } = this.props;
    return (
      <div className="robot-component">
        <div className="robot-image-component">
          <img src={pic} alt="robot" />
        </div>
        <div className="robot-content-component">
          <div className="first-last-name">
            <h2>{firstName} {lastName}</h2>
          </div>
          <div className="information">
            <p>
              Email: {email}<br/>
              Company: {company}<br/>
              Skill: {skill}<br/>
              <Average grades={grades} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Robot;
