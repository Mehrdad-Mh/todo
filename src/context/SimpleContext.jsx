import {createContext} from 'react';


const SimpleContext = createContext({
    state : {},
    handleDeletPerson : () => {},
    handleNameChange : () => {},
    handleAddPerson : () => {},
    setPerson : () => {}
});

export default SimpleContext;