import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            { id: 'ascs', name: 'Jason', age: 20},
            { id: 'bcsa', name: 'Testing', age: 22},
            { id: 'cdsf', name: 'Test2', age: 18}
        ],
        otherState: 'Other value',
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        //BOTH OF THESE WAYS WORK

        // FIRST WAY USING SLICE
        // const persons = this.state.persons.slice();

        // SECOND WAY USING ... MORE MODERN
        const persons = [...this.state.persons]

        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        // OTHER WAY OF DOING IT
        // const person = Object.assign({}, this.state.persons[personIndex])

        // MODERN WAY OF DOING IT "Spread Operator"
        const persons = [...this.state.persons]
        persons[personIndex] = person;

        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }


    render () {

        const style = {
            backgroundColor: 'green',
            color: 'white',
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
                        this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                        })
                    }
                </div>
            )
            style.backgroundColor = 'red';
        }

        let classes = ['red', 'bold'].join(' ')

        return (
            <div className="App">
                <h1>Hi, I'm Jason Carrillo</h1>
                <p className={classes}>I am a Software Developer</p>
                <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>

                {Persons}


                <br />
                <input/>
            </div>

            // After nesting for a long time it becomes too much. Better to not use this way.
            //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing'))

        );
    }
}

export default App;
