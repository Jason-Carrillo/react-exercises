import React from 'react';
import classes from "./Cockpit.module.css";

const cockpit = (props) => {

    let assignedClasses = []
    let btnClass = "";

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); //CLASSES WILL BE RED
    }
    if (props.persons.length <= 1){
        assignedClasses.push(classes.bold); //CLASSES WILL BE BOLD
    }

    return (
        <div className={classes.Cockpit} >
            <h1>Hi, I'm Jason Carrillo</h1>
            <p className={assignedClasses.join(' ')}>I am a Software Developer</p>
            <button className={btnClass} onClick={this.togglePersonsHandler}>Switch Name</button>
        </div>
    );
}