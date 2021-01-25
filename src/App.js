import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className={App}>
        <h1>Hi, I'm Jason Carrillo</h1>
        <p>I am a Software Developer</p>
        <Person />
        <Person />
        <Person />
    </div>

      // After nesting for a long time it becomes too much. Better to not use this way.
    //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing'))

  );
}

export default App;
