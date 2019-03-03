import React from "react";

class Grade extends React.Component {
  render() {
    return (
      <div className="panel-active">
        {this.props.grades.map((grade, id) => {
          return (
            <div key={grade}>
              Test{id + 1} <div className="grade">{grade}%</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Grade;
