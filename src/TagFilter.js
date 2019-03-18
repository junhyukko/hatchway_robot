import React from "react";

class TagFilter extends React.Component {
  render() {
    return (
      <div className="robot-filter">
        <label htmlFor="tag-filter"> </label>
        <input
          type="text"
          placeholder="Search by tag"
          value={this.props.tagValue}
          onChange={this.props.tagChange}
          name="robot-filter"
        />
      </div>
    );
  }
}

export default TagFilter;
