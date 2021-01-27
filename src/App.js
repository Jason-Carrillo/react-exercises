import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            {name: 'Jason', age: 20},
            {name: 'Testing', age: 22},
            {name: 'Test2', age: 18}
        ],
        otherState: 'Other State',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        // console.log("Was Clicked")
        // DONT DO THIS => state.persons[0].name = "Switched Jason";
        this.setState({
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

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }


    render () {

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
                <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
                {
                    this.state.showPersons ?
                    <div>
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
                        : null
                }
            </div>

            // After nesting for a long time it becomes too much. Better to not use this way.
            //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing'))

        );
    }
}

export default App;
