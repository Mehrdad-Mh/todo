import {useContext} from 'react';
import Person from './Person';
import SimpleContext from '../../context/SimpleContext';
import { Col, Row } from 'reactstrap';


const Persons = () => {

    const context = useContext(SimpleContext);
    
    return ( 

 
<div  style={{display : 'flex' , flexDirection : "row" , flexWrap : "wrap"}}  >
{context.persons.map(fard => (
<Col xs={12} sm={12} md={6} lg={6} xl={4}>
    <Person
    key={fard.id}
    fullname={fard.fullname}
    deleted={() => context.handleDeletPerson(fard.id)}
    changed = {(event) => context.handleNameChange(event , fard.id) }
   
    />
</Col>
))}
        </div>

      
      
     );
};
 
export default Persons;









// className='col-md-6 col-lg-6 col-xl-6'