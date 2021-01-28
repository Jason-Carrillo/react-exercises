import React, { Component } from 'react';
import classes from './App.module.css';
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

        let Persons = null;

        let btnClass = "";

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
            btnClass = classes.Red;
        }

        let assignedClasses = []
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red); //CLASSES WILL BE RED
        }
        if (this.state.persons.length <= 1){
            assignedClasses.push(classes.bold); //CLASSES WILL BE BOLD
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm Jason Carrillo</h1>
                <p className={assignedClasses.join(' ')}>I am a Software Developer</p>
                <button className={btnClass} onClick={this.togglePersonsHandler}>Switch Name</button>

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
