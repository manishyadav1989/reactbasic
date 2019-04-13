import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = (props) =>{
    console.log('came into app func!');
    const [psersonState, setpsersonState] = useState({
        persons : [{
            name : 'Ram',
            age : 23
          },{
            name : 'Shyam',
            age : 28
          },{
            name : 'Kishan',
            age : 26
        }]
    });

    const [otherState] = useState({otherState: "This is an other state"});

    console.log(`psersonState :: ${JSON.stringify(psersonState)}, otherState : ${JSON.stringify(otherState)}`)
    const switchNameHandler = () => {
        setpsersonState({
            persons : [{
                name : 'Ram Shyam',
                age : 23
              },{
                name : 'Shyam Sunder',
                age : 28
              },{
                name : 'Kishan Gopal',
                age : 26
            }]
        })
    }

    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={psersonState.persons[0].name} age={psersonState.persons[0].age}/>
          <Person name={psersonState.persons[1].name} age={psersonState.persons[1].age}> THis is children code</Person>
          <Person name={psersonState.persons[2].name} age={psersonState.persons[2].age}/>
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

export default app;
