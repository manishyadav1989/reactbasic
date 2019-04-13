import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) =>{
        return <Person 
                change={(event) => props.changed(event, index)} 
                key={person.id} 
                name={person.name} 
                age={person.age} 
                click={()=> props.clicked(index)}/>
})

export default Persons;