import React from 'react';
import  PropTypes  from 'prop-types';


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

// class Person extends Component {
 
//    render() { 
//       const { fullname, deleted, changed } = this.props;
//       return (
//          <div style={{ cursor: "pointer"  }} className='card text-white bg-info mb-3 mt-3  container' >
     
  
//                   <div className='card-body'>
                 
//                    <p className='d-block'>  {` ${fullname}  `}</p>
         
//                      <div className='input-group justify-content-center'>
         
//                          <input 
//                          type="text" 
//                          placeholder={fullname}
//                           className=' form-control w-50'
//                            onChange={changed}
//                             />

//                         <div className='input-group-prepend'>
//                            <button onClick={deleted} 
//                            className=' btn btn-danger btn-group-sm fa fa-trash '>حذف</button>
//                         </div>
//                      </div>
                    
//                   </div>
               
         
         
//              </div>
//       );
//    };
// };
 
Person.propTypes = {
   fullname : PropTypes.string,
   deleted : PropTypes.func,
   changed : PropTypes.func
}

export default Person;