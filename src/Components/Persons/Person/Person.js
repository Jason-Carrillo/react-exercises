import React, {Component} from 'react';
import ProptTypes from 'prop-types';

import classes from './Person.css'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'


class Person extends Component {
    componentDidMount() {
        this.inputElement.focus();
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
        <Aux>
                <p key="i1" onClick={this.props.click}>I'm a {this.props.name}, and I am {this.props.age} years old
                </p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    ref={(inputEl) => {this.inputElement = inputEl} }
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
        </Aux>
        )
    }
};

Person.propTypes = {
    click: ProptTypes.func,
    name: ProptTypes.string,
    age: ProptTypes.number,
    changed: ProptTypes.func
};

export default withClass(Person, classes.Person);