import React from "react";

class TagFilter extends React.Component{
  render(){
    return(
      <div>
        <label htmlFor="robot-filter"> </label>
        <input type="text" placeholder="Search by tag" value={this.props.value} onChange={this.props.onChange} name="robot-filter" />
      </div>
    )
  }
}

export default TagFilter
