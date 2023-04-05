import {createContext} from 'react';



const SimpleContext = createContext({
    persons : [],
    person  : "",
    handleDeletPerson : () => {},
    handleNameChange : () => {},
    handleAddPerson : () => {},
    setPerson : () => {}
});

export default SimpleContext;