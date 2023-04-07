import {createContext} from 'react';



const SimpleContext = createContext({
    // afrad : [],
    // fard  : "",
    state : {},
    handleDeletPerson : () => {},
    handleNameChange : () => {},
    handleAddPerson : () => {},
    setPerson : () => {}
});

export default SimpleContext;