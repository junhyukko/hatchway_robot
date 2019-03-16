import React from "react";
import RobotFilter from "./RobotFilter";
import TagFilter from "./TagFilter";
import Results from "./Results";

class RobotContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: this.props.robots,
      filterValue: "",
      tagFilterValue: "",
      tagrobots: this.props.robots,
      // width: "",
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
  }

  // componentDidMount = e => {
  //   this.updateWindowDimensions()
  //   window.addEventListener('resize', this.updateWindowDimensions)
  // }
  //
  // updateWindowDimensions = () => {
  //   this.setState({ width: window.innerWidth })
  // }

  handleFilterChange(event) {
    event.preventDefault();
    const filterValue = event.target.value;
    this.setState((prevState, props) => {
      console.log(props);

      const filteredRobots = props.robots.filter(
        robot =>
          robot.firstName
            .toLocaleLowerCase()
            .includes(filterValue.toLocaleLowerCase()) ||
          robot.lastName
            .toLocaleLowerCase()
            .includes(filterValue.toLocaleLowerCase())
      );

      return {
        robots: filteredRobots,
        filterValue
      };
    });
  }

  handleTagChange(event) {
    event.preventDefault();
    const tagFilterValue = event.target.value;

    this.setState((prevState, props) => {
      console.log(props);

      const tagfilteredRobots = props.robots.filter(robot =>
        robot.tag
          ? robot.tag
              .toLocaleLowerCase()
              .includes(tagFilterValue.toLocaleLowerCase())
          : null
      );

      return {
        robots: tagfilteredRobots,
        tagFilterValue
      };
    });
  }

  render() {
    console.log(this.state.width)
    const { onChange } = this.props;
    return (
      <div className="robot-container">

          <div className="filter">
            <div className="filters">
              <RobotFilter
                onChange={this.handleFilterChange}
                value={this.state.filterValue}
              />

              <TagFilter
                tagChange={this.handleTagChange}
                value={this.state.tagFilterValue}
              />
            </div>
          </div>

        <div className="results">
          <Results robots={this.state.robots} />
        </div>
      </div>
    );
  }
}

export default RobotContainer;
