import React from "react";
import Robot from "./Robot";
class Results extends React.Component {
  render() {
    const { robots } = this.props;
    return (
      <h1>
        {robots.map(robot => {
          console.log("i should be 25");
          return <Robot
            key={robot.id}
            pic= {robot.pic}
            firstName= {robot.firstName}
            lastName={robot.lastName}
            city= {robot.city}
            company={robot.company}
            email={robot.email}
            grades={robot.grades}
            id={robot.id}
            skill={robot.skill}
          />;
        })}
      </h1>
    );
  }
}

export default Results;
