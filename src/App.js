import React,{Component} from 'react';
import './App.css';
import Persons from './components/Person/Persons';
import {Button} from "react-bootstrap";
import {ToastContainer , toast} from "react-toastify";
import Header from './components/common/Header';
import SimpleContext from './context/SimpleContext';
import NewPerson from './components/Person/NewPerson';




class App extends Component  {

 

  state = {
    afrad : [],
    fard : '',
    // showHeader : true,
    showperson : true,
    appTitle : "مدیریت کننده اشخاص"
         };

         static contextType = SimpleContext;

  // const [Afrad , setAfrad] = useState([]);
  // const [Fard , setFard] = useState("");
  // const [ShowPerson , setShowPerson] = useState(true);

    
          handleShowPerson =() =>{
          this.setState({showperson : !this.state.showperson});
          
         };

        //  handleShowHeader = () =>{
        //   this.setState({showHeader : !this.state.showHeader})
        //  };
    
         handleDeletPerson = id =>{
          const afrad = [...this.state.afrad];
          const filtredp = afrad.filter(p => p.id !== id);
          this.setState( {afrad : filtredp} );

          const afradIndex = afrad.findIndex(p => p.id === id);
          const person = afrad[afradIndex];
    
          toast.error(`${person.fullname} با موفقیت حذف شد` , {
           position : 'top-left',
           closeButton:true,
           closeOnClick:false 
          });
         };
    
         handleNameChange = (event , id) => {
          const {afrad : allPersons} = this.state;
          const afradIndex = allPersons.findIndex(p => p.id===id);
          const fard = allPersons[afradIndex];
          fard.fullname= event.target.value;
          console.log(event);
          const afrad = [...allPersons]
          afrad[afradIndex] = fard;
          this.setState({afrad})
         };
    
         handleAddPerson = () =>{
          const afrad = [...this.state.afrad]
          const fard = {
            id : Math.floor(Math.random() * 1000),
            fullname : this.state.fard
          }
    
          if(fard.fullname !== "" && fard.fullname !== " "){
            afrad.push(fard);
            this.setState({afrad , fard : "" });
            console.log(fard ,"fard is")
          };
          toast.success("شخص با موفقیت اصافه شد" , {
            position : 'top-right',
            closeButton : true,
            closeOnClick:true
          }
          ); 
         }
    
        setPerson = event =>{
          this.setState({ fard : event.target.value})
         };


         render(){

        
    
         const {afrad , showperson ,showHeader} = this.state;

         let pers = null;
         
         
         
         if(showperson){
           pers=( 
           
                 <Persons 
                  //  afrad={afrad}
                  //  delet={this.handleDeletPerson}
                  //  nameChange = {this.handleNameChange}
                  //  personAdd = {this.handleAddPerson}
               />
              );
         }

        

        //  const btnStyle = {
        //   ":hover" : {color : "red" , backgroundColor : "black"}
        //  }

        //  btnStyle[':hover'] = {color : "pink" , backgroundColor : "yellow"}

  return ( 
<SimpleContext.Provider 
       value={{
          // persons : Afrad,
          // person : Fard,
          // handleAddPerson: handleAddPerson,
          // handleDeletPerson : handleDeletPerson,
          // handleNameChange : handleNameChange,
          // setPerson : setPerson

          state : this.state,
          handleDeletPerson : this.handleDeletPerson,
          handleNameChange: this.handleNameChange,
          handleAddPerson: this.handleAddPerson,
          setPerson : this.setPerson
        }}>
 <div >
           
           <Header appTitle="مدیریت کننده کارها"
          //  afradLength={afrad.length}
          //  appTitle={this.state.appTitle}
           />
           
           {/* <Button onClick={this.handleShowHeader} variant='primary'>نمایش هدر</Button> */}
     


    <NewPerson/>
    
  
      <Button
       onClick={this.handleShowPerson}
        className='showhvr'
         variant={showperson ? 'success dokme' : "danger"}>نمایش </Button>

      {/* <button onClick={handleShowPerson} style={{btnStyle}} >نمایش</button> */}
      {pers}
   <ToastContainer/>
         </div>
        </SimpleContext.Provider>
   );
}
 
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
