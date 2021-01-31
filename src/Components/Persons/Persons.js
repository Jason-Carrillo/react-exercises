import React from 'react';
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const persons = (props) => (
    persons.map((person, index) => {
        return <ErrorBoundary key={person.id}>
            <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}

                changed={(event) => this.nameChangedHandler(event, person.id)}
            />
        </ErrorBoundary>
    })
)