import React from "react";

class RobotFilter extends React.Component {
  render() {
    return (
      <div className="robot-filter">
        <label htmlFor="robot-filter"> </label>
        <input
          type="text"
          placeholder="Search by name"
          value={this.props.value}
          onChange={this.props.onChange}
          name="robot-filter"
        />
      </div>
    );
  }
}

export default RobotFilter;
