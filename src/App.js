import React, { Components } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Components {
    state = {
        persons: [
            {name: 'Jason', age: 20},
            {name: 'Testing', age: 22},
            {name: 'Test2', age: 18}
        ],
        otherState: 'Other State'
    };

    switchNameHandler = (newName) => {
        // console.log("Was Clicked")
        // DONT DO THIS => state.persons[0].name = "Switched Jason";
        this.setPersonsState({
            persons: [
                {name: newName, age: 20},
                {name: 'test2', age: 22},
                {name: 'SwitchedTest2', age: 18}
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Jason", age: 20},
                {name: event.target.value, age: 25},
                {name: "test3", age: 20}
            ]
        })
    }


    render ()
    {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Hi, I'm Jason Carrillo</h1>
                <p>I am a Software Developer</p>
                <button style={style} onClick={() => this.switchNameHandler('Voorhees!!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Voorhees")}
                    changed={this.nameChangedHandler}>My Hobbies: Fishing</Person>
                <Person
                    name={this.state.persons[2].age}
                    age={this.state.persons[2].age}/>
            </div>

            // After nesting for a long time it becomes too much. Better to not use this way.
            //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing'))

        );
    }
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
