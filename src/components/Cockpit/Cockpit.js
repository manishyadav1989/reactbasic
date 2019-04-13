import React from 'react';

const Cockpit = (props) =>{
    return (
        <div>
            <img src={props.logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>App.js</code> and save to reload.
            </p>
            <button style={props.style} onClick= {props.clicked}>Toggle Person</button>
        </div>
    );
}

export default Cockpit;