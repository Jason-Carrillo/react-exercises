import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Perons.js] getDerivedStateFromProps')
    // }

    //OUT DATED NO LONGER USED
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('[Persons.js] componentWIllReceiveProps', props)
    // }

    //OUT DATED NO LONGER USED
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Persons.js] componentWIllReceiveProps', props)
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    render() {
        console.log('[Person.js] rendering...')
        return this.props.persons.map((person, index) => {

            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>

        })
    }
}

export default Persons;