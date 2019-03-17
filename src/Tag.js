import React from "react";
const ENTER_KEY = 13;
const COMMA_KEY = 188;
const BACKSPACE_KEY = 8;

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      myrobot: [],
      value: "",
      tagInputValue:'',
      tags:[]
    }
    this.handleTagFilter = this.handleTagFilter.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.addTag = this.addTag.bind(this)
    // this.submitTagFilter = this.submitTagFilter.bind(this)
  }

  handleTagFilter(event) {
    event.preventDefault();
    const value = event.target.value;
    console.log(value)
    this.setState({
      value: value
    })
  }

  handleKeyUp(e) {
   const key = e.keyCode;

   if (key === ENTER_KEY || key === COMMA_KEY) {
     this.addTag();
   }
 }

 addTag() {
  const { tags, value } = this.state;
  let tag = value

  if (!tag) {
    return;
  }

  this.setState({
    tags: tags.concat(tag),
    value: ""
  });
}
  // submitTagFilter(event) {
  //   event.preventDefault();
  //   const tagValue =event.target.value
  //   const robotTag = this.props.robots[this.props.id - 1]
  //   console.log(robotTag)
  //   robotTag["tag"] = tagValue
  //   console.log(robotTag)
  //   this.setState({
  //     myrobot: robotTag
  //   })
  // }

  render() {
    const { tags, value } = this.state
    return (
      <div>
        <ul>
            {tags.map((tag, i) => (
              <li key={tag + i} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        <input
           type="text"
           placeholder="Add tag..."
           value={value}
           onChange={this.handleTagFilter}
           ref="tag"
           className="tag-input"
           onKeyUp={this.handleKeyUp}
           // onKeyDown={this.handleKeyDown}
         />
        {/* <div>
            {this.state.myrobot.tag ? <div>tag:{this.state.myrobot.tag}</div> : null }
          <input
            type="text"
            placeholder="Add tag"
            value={this.state.value}
            onChange={this.handleTagFilter}
            name="robot-filter"
          />
          <input type="submit" onClick={this.submitTagFilter} value={this.state.value} />
        </div> */}
      </div>
    );
  }
}

export default Tag;
