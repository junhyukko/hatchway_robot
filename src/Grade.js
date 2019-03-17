import React from "react";
import Tag from "./Tag";

class Grade extends React.Component {
  render() {
    return (
      <div className="panel-active">
        {this.props.grades.map((grade, id) => {
          return (
            <div key={this.props.id}>
              Test {id + 1}: <div className="grade">{grade}%</div>
            </div>
          );
        })}

        <div className="tag-component">
          <Tag robots={this.props.robots} id={this.props.id} />
        </div>
      </div>
    );
  }
}

export default Grade;
