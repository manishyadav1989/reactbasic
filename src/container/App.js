import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';

class App extends Component {
  state = {
      persons : [{
        id: 1,
        name : 'Ram',
        age : 23
      },{
        id: 2,
        name : 'Shyam',
        age : 28
      },{
        id: 3,
        name : 'Kishan',
        age : 26
      }],
      showPerson : false
  }

  deleteHandler = (personIndex) =>{
      this.state.persons.splice(personIndex, 1);
      this.setState({persons: this.state.persons})
  }

  onChangeHandler = (event, index) =>{
    const persons = this.state.persons;
    persons[index].name = event.target.value;
    this.setState({persons: persons})
  }

  toggleHandler = () =>{
    this.setState({showPerson: !this.state.showPerson})
  }

  render() {
    const style = {
       backgroundColor : '#fff',
       padding : '8px',
       border : '1px solid #fff',
       fontWeight : 'bold',
       cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPerson){
        persons = (
          <div>
              <Persons
                persons = {this.state.persons}
                changed = {this.onChangeHandler}
                clicked = {this.deleteHandler} />
          </div>
        )
    }

    return (
      <div className="App">
        <header className="App-header">
          <Cockpit 
            clicked = {this.toggleHandler}
            logo = {logo}
            style = {style} />
          { persons }
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
