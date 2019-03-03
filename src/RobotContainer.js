import React from "react";
import RobotFilter from "./RobotFilter";
import TagFilter from "./TagFilter";
import Results from "./Results";

class RobotContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: this.props.robots,
      filterValue: ""
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }


  handleFilterChange(event) {
    event.preventDefault()
    const filterValue = event.target.value;
    this.setState((prevState, props) => {
      console.log(props)

      const filteredRobots = props.robots.filter(robot =>
        robot.firstName.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()) ||
        robot.lastName.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
      );

      return {
        robots: filteredRobots,
        filterValue
      }
    })
  }


  render() {
    const { onChange } = this.props;
    return (
      <div>
        <RobotFilter
          onChange={this.handleFilterChange}
          value={this.state.filterValue}
        />
        <TagFilter
          onChange={this.handleFilterChange}
          value={this.state.filterValue}
        />
        <Results robots={this.state.robots} />
      </div>

    );
  }
}

export default RobotContainer;
