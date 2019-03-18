import React from "react";
const ENTER_KEY = 13;
const COMMA_KEY = 188;
const BACKSPACE_KEY = 8;

class Tag extends React.Component {
  render() {
    return (
      <div>
        {this.props.robotTags ? (
          <ul>
            {this.props.robotTags.map((tag, id) => {
              return <li key={id}> {tag} </li>;
            })}
          </ul>
        ) : null}
        <input
          type="text"
          placeholder="Add tag..."
          value={this.props.textValue}
          onChange={this.props.handleTagFilter}
          ref={this.tagRef}
          className="tag-input"
          onKeyUp={this.props.handleKeyUp}
          id={this.props.id}
          onSubmit={this.props.addTag}
        />
      </div>
    );
  }
}

export default Tag;
