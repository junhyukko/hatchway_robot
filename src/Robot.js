import React from "react";
import Average from "./Average";
import "./Robot.css";
import Grade from './Grade'

class Robot extends React.Component {
  constructor(props){
    super(props)

    this.state={
      visible: false,
    }
    this.acordion = this.acordion.bind(this)
  }

  acordion(e){
    if(this.state.visible === false) {
      this.setState((prevState, props) => ({
        visible: true
      }))
    } else {
      this.setState((prevState, props) => ({
        visible: false
      }))
    }
  }

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
            <h2>
              {firstName} {lastName}
            </h2>
          </div>
          <div className="information">
            <p>
              Email: {email}
              <br />
              Company: {company}
              <br />
              Skill: {skill}
              <br />
              <Average grades={grades} />
              {this.state.visible ? <p> <Grade grades={grades} robots={this.props.robots} id={id}/></p> : null }
            </p>
          </div>
        </div>
        <div className="accordion-component">
          {this.state.visible === false ? <h2 className="accordion" onClick={this.acordion}>+</h2> : <h2 className="accordion" onClick={this.acordion}>-</h2>}
        </div>
      </div>
    );
  }
}

export default Robot;
