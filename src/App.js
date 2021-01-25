import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const app = props =>  {
    const [ personsState, setPersonsState] = useState({
                 persons: [
                     { name: 'Jason', age: 20},
                     { name: 'Testing', age: 22},
                     { name: 'Test2', age: 18}
            ],
            otherState: 'Other State'
        });

    const  switchNameHandler = () => {
    // console.log("Was Clicked")
    // DONT DO THIS => state.persons[0].name = "Switched Jason";
    this.setState ({persons: [
            { name: 'SwitchedJason', age: 20},
            { name: 'Testing', age: 22},
            { name: 'SwitchedTest2', age: 18}
        ]
    })
}



        return (
    <div className={App}>
        <h1>Hi, I'm Jason Carrillo</h1>
        <p>I am a Software Developer</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Fishing</Person>
        <Person name={personsState.persons[2].age} age={personsState.persons[2].age} />
    </div>

      // After nesting for a long time it becomes too much. Better to not use this way.
    //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing'))

  );
}

export default App;

// state = {
//     persons: [
//         { name: 'Jason', age: 20},
//         { name: 'Testing', age: 22},
//         { name: 'Test2', age: 18}
//     ],
//     otherState: 'Other State'
// }
//
// switchNameHandler = () => {
//     // console.log("Was Clicked")
//     // DONT DO THIS => state.persons[0].name = "Switched Jason";
//     this.setState ({persons: [
//             { name: 'SwitchedJason', age: 20},
//             { name: 'Testing', age: 22},
//             { name: 'SwitchedTest2', age: 18}
//         ]
//     })
// }
