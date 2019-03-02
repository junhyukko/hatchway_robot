import React from 'react';
import Average from './Average';
class Robot extends React.Component {
  render(){
    const { city, company, email, firstName, grades, id, lastName, pic, skill } = this.props
    return (
      <div>
        <img src={pic} alt="robot"/>
        <h2>{firstName}</h2>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Skill: {skill}</p>
        <Average grades={grades}/>
      </div>
    )
  }
}

export default Robot
