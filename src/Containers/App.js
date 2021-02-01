import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'


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

        let persons = null;


        if (this.state.showPersons){
            persons = (
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
            )

        }



        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />

                {persons}


                <br />
                <input/>
            </div>
            // After nesting for a long time it becomes too much. Better to not use this way.
            //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing'))

        );
    }
}

export default App;
