
import React,{useContext,useRef,useEffect} from 'react';
import SimpleContext from '../../context/SimpleContext';
import {Button} from "react-bootstrap";
import context from 'react-bootstrap/esm/AccordionContext';



const NewPerson = () => {



    const focusInput = useRef(null);
const context = useContext(SimpleContext);

useEffect(() => {
    focusInput.current.focus()
})



    return ( 

    <div className='ashkhas'>
  
  <form
  onSubmit={event => event.preventDefault()}
  >
 
     <input
     ref={focusInput}
     type='text' 
     placeholder='اضافه کردن شخص' 
     onChange={context.setPerson}
      value={context.state.fard} 
      className='inp' />
 
   <Button 
   type='submit' 
     onClick={context.handleAddPerson }
     
      variant='danger '
      className='fa fa-plus-square dokme'
      >اضافه کن</Button>
   </form>
 
    
    </div>


     );
}
 
export default NewPerson;