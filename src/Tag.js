import React from "react";
const ENTER_KEY = 13;
const COMMA_KEY = 188;
const BACKSPACE_KEY = 8;

class Tag extends React.Component {
  render() {
    return (
      <div className="tag-container">
        <div className="tags-container-tags">
          {this.props.robotTags ? (
            <ul>
              {this.props.robotTags.map((tag, id) => {
                return <li key={id}> <div className="tag">{tag}</div> </li>;
              })}
            </ul>
          ) : null}
        </div>
        <div className="tag-container-input">
          <input
            type="text"
            placeholder="Add tag"
            value={this.props.textValue}
            onChange={this.props.handleTagFilter}
            ref={this.tagRef}
            className="tag-input"
            onKeyUp={this.props.handleKeyUp}
            id={this.props.id}
            onSubmit={this.props.addTag}
          />
        </div>
      </div>
    );
  }
}

export default Tag;
