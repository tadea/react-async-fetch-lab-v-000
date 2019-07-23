
import React, { Component } from 'react'

class App extends Component {
    setState = {
        peopleInSpace: []
    }

    render() {
        return (
          <div>
            {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
          </div>
        )
      }
      
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
        })
    }

    
}
export default App