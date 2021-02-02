import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'


class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js constructor')
    }


    state = {
        persons: [
            { id: 'ascs', name: 'Jason', age: 20},
            { id: 'bcsa', name: 'Testing', age: 22},
            { id: 'cdsf', name: 'Test2', age: 18}
        ],
        otherState: 'Other value',
        showPersons: false,
        showCockpit: true
    };

    static getDerivedStateFromProps (props, state) {
        console.log('[App.js] getDerivedStateFromPops', props)
        return state;
    }

    //WILL BE REMOVED WONT BE AROUND FOR LONG
    // componentWillMount() {
    //     console.log('[App.js] componentWillMount')
    // }

    //IMPORTANT
    componentDidMount() {
        console.log('[App.js] componentDidMount')
    }

    //IMPORTANT
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate')
        return true;
    }

    //IMPORTANT
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate')
    }

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
        console.log('[App.js] render')

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
                <button onClick={() => {
                    this.setState( {showCockpit: false} )
                }}>
                    Remove Cockpit
                </button>
                {this.state.showCockpit ? (<Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonsHandler}
                />
                    ): null}


                {persons}


                <br />
            </div>
            // After nesting for a long time it becomes too much. Better to not use this way.
            //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'testing'))

        );
    }
}

export default App;
