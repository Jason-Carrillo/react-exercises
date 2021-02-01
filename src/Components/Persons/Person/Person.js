import React, {Component} from 'react';
import classes from './Person.css'




class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (

            <div className={classes.Person}>
                <p onClick={props.click}>I'm a {props.name}, and I am {props.age} years old</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed}/>
            </div>
        )
    }
};

export default Person;