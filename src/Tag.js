import React from "react";

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      myrobot: [],
      value: ""
    }
    this.handleTagFilter = this.handleTagFilter.bind(this)
    this.submitTagFilter = this.submitTagFilter.bind(this)
  }

  handleTagFilter(event) {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      value: value
    })
  }
  submitTagFilter(event) {
    event.preventDefault();
    const tagValue =event.target.value
    const robotTag = this.props.robots[this.props.id - 1]
    console.log(robotTag)
    robotTag["tag"] = tagValue
    console.log(robotTag)
    this.setState({
      myrobot: robotTag
    })
  }

  render() {
    console.log(this.state.myrobot)
    return (
      <div>
        <div>
            {this.state.myrobot.tag ? <div>{this.state.myrobot.tag}</div> : null }
          <input
            type="text"
            placeholder="Add tag"
            value={this.state.value}
            onChange={this.handleTagFilter}
            name="robot-filter"
          />
          <input type="submit" onClick={this.submitTagFilter} value={this.state.value} />
        </div>
      </div>
    );
  }
}

export default Tag;
