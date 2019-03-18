import React from "react";
import Tag from "./Tag";

class Grade extends React.Component {
  render() {
    return (
      <div className="panel-active">
        {this.props.grades.map((grade, id) => {
          return (
            <div key={id}>
              <p>Test {id + 1}: <span className="grade">{grade}%</span></p>
            </div>
          );
        })}

        <div className="tag-component">
          <Tag
            robots={this.props.robots}
            robotTags={this.props.robotTags}
            id={this.props.id}
            tags={this.props.tags}
            tag={this.props.tag}
            textValue={this.props.textValue}
            handleKeyUp={this.props.handleKeyUp}
            addTag={this.props.addTag}
            handleTagFilter={this.props.handleTagFilter}

          />
        </div>
      </div>
    );
  }
}

export default Grade;
