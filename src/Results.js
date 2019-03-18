import React from "react";
import Robot from "./Robot";
class Results extends React.Component {
  render() {
    const { robots } = this.props;
    return (
      <h1>
        {robots.map(robot => {
          return (
            <Robot
              robots={robots}
              robotTags={robot.tags}
              key={robot.id}
              pic={robot.pic}
              firstName={robot.firstName}
              lastName={robot.lastName}
              city={robot.city}
              company={robot.company}
              email={robot.email}
              grades={robot.grades}
              id={robot.id}
              skill={robot.skill}
              visible={this.props.visible}
              tags={this.props.tags}
              tag={this.props.tag}
              textValue={this.props.textValue}
              handleKeyUp={this.props.handleKeyUp}
              addTag={this.props.addTag}
              handleTagFilter={this.props.handleTagFilter}
            />
          );
        })}
      </h1>
    );
  }
}

export default Results;
