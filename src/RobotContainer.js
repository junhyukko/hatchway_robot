import React from "react";
import RobotFilter from "./RobotFilter";
import Results from "./Results";

class RobotContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: this.props.robots,
      filterValue: ""
    };

    // this.handleFilterChange = this.handleFilterChange.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  // handleFilterChange(e) {
  //   e.preventDefault();
  //
  //   const filterValue = e.target.value;
  //   console.log(filterValue);
  //   console.log(this.state.robots)
  //   this.setState((prevState, props) => {
  //     const filteredRobotList = props.robots.filter(robot => {
  //       console.log(robot.firstName.toLocaleLowerCase().includes(filterValue))
  //       robot.firstName
  //         .toLocaleLowerCase()
  //         .indexOf(filterValue.toLocaleLowerCase());
  //     });
  //     console.log(filteredRobotList)
  //     return {
  //       robots: filteredRobotList,
  //       filterValue
  //     };
  //   });
  // }

  updateSearch(e){
    this.setState({filterValue: e.target.value})
    console.log(this.state.filterValue)

    let filteredRobots = this.state.robots.filter(robot => {
      return robot.firstName.toLocaleLowerCase().includes(this.state.filterValue.toLocaleLowerCase());
    })

    this.setState({robots: filteredRobots})

  }
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <RobotFilter
          onChange={this.updateSearch}
          value={this.state.filterValue}
        />
        <Results robots={this.state.robots} />
      </div>

    );
  }
}

export default RobotContainer;
