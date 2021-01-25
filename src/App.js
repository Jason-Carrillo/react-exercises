import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {

    let state = {
        persons: [
            { name: 'Jason', age: 20},
            { name: 'Testing', age: 22},
            { name: 'Test2', age: 18}
        ]
    }

    let switchNameHandler = () => {
        console.log("Was Clicked")
    }

  return (
    <div className={App}>
        <h1>Hi, I'm Jason Carrillo</h1>
        <p>I am a Software Developer</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={state.persons[0].name} age={state.persons[0].age} />
        <Person name={state.persons[1].name} age={state.persons[1].age}>My Hobbies: Fishing</Person>
        <Person name={state.persons[2].age} age={state.persons[2].age} />
    </div>

      // After nesting for a long time it becomes too much. Better to not use this way.
    //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing'))

  );
}

export default App;
