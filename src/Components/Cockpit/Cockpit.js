import React, { useEffect, useRef } from 'react';
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        // Http Requests...
        // setTimeout(() =>
        //     alert('saved Data to Cloud')
        //     ,1000)
        toggleButtonRef.current.click();
        return () => {
            console.log('[Cockpit.js] clearn up work in useEffect')
        }
    }, [])

    // you can have MULTIPLE USE EFFECT
    //useEffect()

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')

        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })

    let assignedClasses = []
    let btnClass = "";

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); //CLASSES WILL BE RED
    }
    if (props.personsLength <= 1){
        assignedClasses.push(classes.bold); //CLASSES WILL BE BOLD
    }

    return (
        <div className={classes.Cockpit} >
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is Workign!</p>
            <button ref={toggleButtonRef} className={btnClass} onClick={props.clicked}>
                Switch Name
            </button>
            <button onClick={props.login}>Log In</button>
        </div>
    );
}

export default React.memo(Cockpit);