import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className={App}>
        <h1>Hi, I'm Jason Carrillo</h1>
        <p>I am a Software Developer</p>
        <Person name="Jason" age="27" />
        <Person name="Test1" age="20" >My Hobbies: Fishing</Person>
        <Person name="Test2" age="25" />
    </div>

      // After nesting for a long time it becomes too much. Better to not use this way.
    //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing'))

  );
}

export default App;
