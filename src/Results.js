import React from 'react';
import Robot from './Robot';
class Results extends React.Component {

  render(){
    const { robots } = this.props
    return(
      <h1>
        {robots.map(robot => {
          console.log("i should be 25")
          return (
              <Robot/>
          )
        })}
      </h1>
    )
  }
}

export default Results
