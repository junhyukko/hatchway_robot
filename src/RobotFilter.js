import React from "react";

class RobotFilter extends React.Component{
  render(){
    return(
      <div>
        <label htmlFor="robot-filter"> </label>
        <input type="text" value={this.props.value} onChange={this.props.onChange} name="robot-filter" />
      </div>
    )
  }
}

export default RobotFilter
