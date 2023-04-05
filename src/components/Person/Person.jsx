import React from 'react';
import { Row,Col } from 'reactstrap';


const Person = ({ fullname, deleted, changed }) => {
   return (
      
             
      <div style={{ cursor: "pointer"  }} className='card text-white bg-info mb-3 mt-3  container' >
     
  
         <div className='card-body'>
        
            <p className='d-block'>  {` ${fullname}  `}</p>

            <div className='input-group justify-content-center'>

               <input type="text" placeholder={fullname} className=' form-control w-50' onChange={changed} />
               <div className='input-group-prepend'>
                  <button onClick={deleted} className=' btn btn-danger btn-group-sm fa fa-trash '>حذف</button>
               </div>
            </div>
           
         </div>
      


      </div>
  
   );
}

export default Person;