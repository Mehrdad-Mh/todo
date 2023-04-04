import React from 'react';
import Person from './Person';
import SimpleContext from '../../context/SimpleContext';


const Persons = () => {
    return ( 
<SimpleContext.Consumer>
    {context => (

<div>
{context.state.afrad.map(fard => (
    <Person
    key={fard.id}
    fullname={fard.fullname}
    deleted={() => context.handleDeletPerson(fard.id)}
    changed = {(event) => context.handleNameChange(event , fard.id) }
   
    />
))}
        </div>

    )}
</SimpleContext.Consumer>
      
     );
};
 
export default Persons;