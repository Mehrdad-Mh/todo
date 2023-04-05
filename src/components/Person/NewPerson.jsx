import {useContext} from 'react';
import SimpleContext from '../../context/SimpleContext';
import {Button} from "react-bootstrap";



const NewPerson = () => {
const context = useContext(SimpleContext);

    return ( 


<div className='ashkhas'>
  
  <form
  onSubmit={event => event.preventDefault()}
  >
 
     <input type='text' 
     placeholder='اضافه کردن شخص' 
     onChange={context.setPerson}
      value={context.person} 
      className='inp' />
 
   <Button type='submit' 
     onClick={context.handleAddPerson }
     
      variant='danger '
      className='fa fa-plus-square dokme'
      >اضافه کن</Button>
   </form>
 
    
    </div>

     );
}
 
export default NewPerson;