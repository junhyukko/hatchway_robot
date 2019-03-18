import React from "react";
import Average from "./Average";
import "./Robot.css";
import Grade from "./Grade";

class Robot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
    this.acordion = this.acordion.bind(this);
  }

  acordion(e) {
    if (this.state.visible === false) {
      this.setState((prevState, props) => ({
        visible: true
      }));
    } else {
      this.setState((prevState, props) => ({
        visible: false
      }));
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
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <div>
              <Average grades={grades} />
              {this.state.visible ? (
                <div>
                  {" "}
                  <Grade
                    grades={grades}
                    robots={this.props.robots}
                    robotTags={this.props.robotTags}
                    id={id}
                    tags={this.props.tags}
                    tag={this.props.tag}
                    handleKeyUp={this.props.handleKeyUp}
                    addTag={this.props.addTag}
                    handleTagFilter={this.props.handleTagFilter}
                    textValue={this.props.textValue}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="accordion-component">
          {this.state.visible === false ? (
            <h2 className="accordion" onClick={this.acordion}>
              +
            </h2>
          ) : (
            <h2 className="accordion" onClick={this.acordion}>
              -
            </h2>
          )}
        </div>
      </div>
    );
  }
}

export default Robot;
