import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Results from "./Results";
import RobotContainer from "./RobotContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      loading: true
    };

  // this.handleFilterChange = this.handleFilterChange.bind(this)
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

  render() {
    const { robots, loading } = this.state;
    if (loading === true) {
      return <h1> I'm loading the robots!</h1>;
    }
    return (
      <div className="App">
        <div className="container">
          <RobotContainer robots={robots} />
          {/* <Results robots={robots} /> */}
        </div>
      </div>
    );
  }
}

export default App;
