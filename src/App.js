import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Results from "./Results";
import RobotContainer from "./RobotContainer";
const ENTER_KEY = 13;
const COMMA_KEY = 188;
const BACKSPACE_KEY = 8;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      loading: true,
      tags: [],
      tag: "",
      textValue: ""
    };
  }

  componentDidMount() {
    const robotApi = `https://www.hatchways.io/api/assessment/students`;
    console.log(robotApi);

    fetch(robotApi).then(result => {
      console.log(result);
      result
        .json()
        .then(json => {
          const robots = json;
          console.log(robots.students);

          this.setState({
            robots: robots.students,
            loading: false
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  handleKeyUp = e => {
    e.preventDefault();
    const inputText = e.target.value
    const robotId = e.target.id;
    const key = e.keyCode;
    if (key === ENTER_KEY || key === COMMA_KEY) {
      this.addTag(robotId);
    }
  };

  addTag = (robotId) => {
    const { tags, textValue, robots } = this.state;
    const robot = robots[robotId - 1];
    let newTag = textValue;

    if (robot.tags === undefined) {
      robot["tags"] = [newTag];
      this.setState({
        textValue: ""
      });
    } else {
      robot.tags.push(newTag);
      this.setState({
        textValue: ""
      });
    }


  };

  handleTagFilter = e => {
    e.preventDefault();
    this.setState({
      textValue: e.target.value
      // tag: this.props.tag,
      // tags: this.props.tags
    });
  };

  render() {
    const { robots, loading } = this.state;
    if (loading === true) {
      return <h1> I'm loading the robots!</h1>;
    }
    return (
      <div className="App">
        <div className="container">
          <RobotContainer
            robots={robots}
            tags={this.state.tags}
            tag={this.state.tag}
            textValue={this.state.textValue}
            handleKeyUp={this.handleKeyUp}
            addTag={this.addTag}
            handleTagFilter={this.handleTagFilter}
          />
          {/* <Results robots={robots} /> */}
        </div>
      </div>
    );
  }
}

export default App;
