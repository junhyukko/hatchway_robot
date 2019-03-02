import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results'

class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      robots: [],
      loading: true,
    }
  }
  componentDidMount(){
    const robotApi = `https://www.hatchways.io/api/assessment/students`
    console.log(robotApi);

    fetch(robotApi).then(result=> {
      console.log(result)
      result.json().then(json => {
        const robots = json
        console.log(robots.students)

        this.setState({
          robots: robots.students,
          loading: false,
        })

      }).catch(err => {
        console.log(err)
      })
    })
  }
  render() {
    const { robots, loading } = this.state
    if (loading === true) {
      return (<h1> I'm loading the robots!</h1>)
    }
    return (
      <div className="App">
        HELLO Let me see the robots please..!
        <Results robots = {robots}/>
      </div>
    );
  }
}

export default App;
