import React from "react";

class Average extends React.Component {
  getAvg(array) {
    console.log(array);
    let newArray = array.map(int => {
      return parseInt(int, 10);
    });
    // create new array to sum numbers
    console.log(newArray);
    let sum = newArray.reduce((previous, current) => previous + current);
    let length = newArray.length;
    let avg = sum / length;
    return avg;
  }
  render() {
    const { grades } = this.props;
    return (
      <div>
        <p> Average: {this.getAvg(grades)}% </p>
      </div>
    );
  }
}

export default Average;
