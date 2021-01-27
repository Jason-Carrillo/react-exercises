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
        otherState: 'Other value',
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

        let Persons = null;

        if (this.state.showPersons){
            Persons = (
                <div>
                    {
                        this.state.persons.map(person => {
                            return <Person name={person.name} age={person.age}/>
                        })

                    }
                </div>
            )
        }

        return (
            <div className="App">
                <h1>Hi, I'm Jason Carrillo</h1>
                <p>I am a Software Developer</p>
                <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>

                {Persons}
            </div>

            // After nesting for a long time it becomes too much. Better to not use this way.
            //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing'))

        );
    }
}

export default App;
