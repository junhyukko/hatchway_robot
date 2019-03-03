import React from "react";

class TagFilter extends React.Component{
  render(){
    return(
      <div>
        <label htmlFor="tag-filter"> </label>
        <input type="text" placeholder="Search by tag" value={this.props.value}  onChange={this.props.tagChange} name="robot-filter" />
      </div>
    )
  }
}

export default TagFilter
