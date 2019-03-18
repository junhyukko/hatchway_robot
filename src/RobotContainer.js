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
      tagFilterValue: ""
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
  }

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
            .includes(filterValue.toLocaleLowerCase()) ||
          `${robot.firstName} ${robot.lastName}`
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
    console.log(tagFilterValue);
    const tagFilterValueSet = new Set(tagFilterValue)
    this.setState((prevState, props) => {
      console.log(props);


      const tagfilteredRobots = props.robots.filter(
        robot =>
        tagFilterValue === "" ? robot :
         robot.tags.find(obj => obj.includes(tagFilterValue))
      )
      console.log(tagfilteredRobots)
      console.log(tagFilterValue === "");
      // const tagfilteredRobots = props.robots.filter(robot =>
      //   robot.tags.find(tag =>
      //     tag.toLocaleLowerCase().includes(tagFilterValue.toLocaleLowerCase())
      //   )
      // );

      return {
        robots: tagfilteredRobots,
        tagFilterValue
      };
    });
  }

  render() {
    console.log(this.props.robots);
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
              tagValue={this.state.tagFilterValue}
            />
          </div>
        </div>

        <div className="results">
          <Results
            robots={this.state.robots}
            tags={this.props.tags}
            tag={this.props.tag}
            textValue={this.props.textValue}
            handleKeyUp={this.props.handleKeyUp}
            addTag={this.props.addTag}
            handleTagFilter={this.props.handleTagFilter}
          />
        </div>
      </div>
    );
  }
}

export default RobotContainer;
