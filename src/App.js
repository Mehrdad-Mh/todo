import React,{useState} from 'react';
import './App.css';
import Persons from './components/Person/Persons';
import {Button} from "react-bootstrap";
import {ToastContainer , toast} from "react-toastify";
import Header from './components/common/Header';
import SimpleContext from './context/SimpleContext';
import NewPerson from './components/Person/NewPerson';




const App = () => {

  // state = {
  //   afrad : [],
  //   fard : '',
  //   showperson : true,
  //   appTitle : "مدیریت کننده اشخاص"
  //        }

  const [Afrad , setAfrad] = useState([]);
  const [Fard , setFard] = useState("");
  const [ShowPerson , setShowPerson] = useState(true);

    
         const handleShowPerson =() =>{
          setShowPerson(!ShowPerson);
          
         };
    
        const handleDeletPerson = id =>{
          const afrad = [...Afrad];
          const filtredp = afrad.filter(p => p.id !== id);
          setAfrad( filtredp )
    
          toast.error("شخص با موفقیت حذف شد" , {
           position : 'top-left',
           closeButton:true,
           closeOnClick:false 
          })
         }
    
        const handleNameChange = (event , id) => {
          const {afrad : allPersons} = Afrad;
          const afradIndex = allPersons.findIndex(p => p.id===id);
          const fard = allPersons[afradIndex];
          fard.fullname= event.target.value;
          console.log(event);
          const afrad = [...allPersons]
          afrad[afradIndex] = fard;
          setAfrad(afrad)
         }
    
        const handleAddPerson = () =>{
          const afrad = [...Afrad]
          const fard = {
            id : Math.floor(Math.random() * 1000),
            fullname : Fard
          }
    
          if(fard.fullname !== "" && fard.fullname !== " "){
    
            afrad.push(fard);
            setAfrad(afrad )
            setFard( "" )
          }
          toast.success("شخص با موفقیت اصافه شد" , {
            position : 'top-right',
            closeButton : true,
            closeOnClick:true
          }
          ); 
         }
    
       const setPerson = event =>{
          setFard(event.target.value)
         }
    
        //  const {afrad , showperson} = this.state;

         let pers = null;
         
         
         
         if(ShowPerson){
           pers=( 
           
                 <Persons 
                   // afrad={afrad}
                   // delet={this.handleDeletPerson}
                   // nameChange = {this.handleNameChange}
                   // personAdd = {this.handleAddPerson}
               />
              );
         }

         const btnStyle = {
          ":hover" : {color : "red" , backgroundColor : "black"}
         }

        //  btnStyle[':hover'] = {color : "pink" , backgroundColor : "yellow"}

  return ( 
<SimpleContext.Provider value={{
          persons : Afrad,
          person : Fard,
          handleAddPerson: handleAddPerson,
          handleDeletPerson : handleDeletPerson,
          handleNameChange : handleNameChange,
          setPerson : setPerson
        }}>
 <div >
           
           <Header appTitle="مدیریت کننده کارها"
          //  afradLength={afrad.length}
          //  appTitle={this.state.appTitle}
           />
     
    {/* addperson */}

    <NewPerson/>
    
  
      <Button onClick={handleShowPerson} className='showhvr' variant={ShowPerson ? 'success dokme' : "danger"}>نمایش </Button>

      {/* <button onClick={handleShowPerson} style={{btnStyle}} >نمایش</button> */}
      {pers}
   <ToastContainer/>
         </div>
        </SimpleContext.Provider>
   );
}
 














export default App;




// const App = () =>{
  
//     return(
//       <div className='app'>
//         <p>سلام</p>
//         <hr/>
//         <Shakhs fname="daee" lname="mhmodi" age="28" /><p>لایک داره : {Math.floor(Math.random() * 1000000)}</p>
//       </div>
//     )
  
// }

// export default App;
