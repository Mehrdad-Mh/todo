import React,{Component} from 'react';
import './App.css';
import Persons from './components/Person/Persons';
import {Button} from "react-bootstrap";
import {ToastContainer , toast} from "react-toastify";
import Header from './components/common/Header';
import SimpleContext from './context/SimpleContext';
import NewPerson from './components/Person/NewPerson';






class App extends Component{

     state = {
afrad : [],
fard : '',
showperson : true,
appTitle : "مدیریت کننده اشخاص"
     }

     handleShowPerson =() =>{
      this.setState({showperson : !this.state.showperson});
      
     };

     handleDeletPerson = id =>{
      const afrad = [...this.state.afrad];
      const filtredp = afrad.filter(p => p.id !== id);
      this.setState({afrad : filtredp })

      toast.error("شخص با موفقیت حذف شد" , {
       position : 'top-left',
       closeButton:true,
       closeOnClick:false 
      })
     }

     handleNameChange = (event , id) => {
      const {afrad : allPersons} = this.state;
      const afradIndex = allPersons.findIndex(p => p.id===id);
      const fard = allPersons[afradIndex];
      fard.fullname= event.target.value;
      console.log(event);
      const afrad = [...allPersons]
      afrad[afradIndex] = fard;
      this.setState({afrad})
     }

     handleAddPerson = () =>{
      const afrad = [...this.state.afrad]
      const fard = {
        id : Math.floor(Math.random() * 1000),
        fullname : this.state.fard
      }

      if(fard.fullname !== "" && fard.fullname !== " "){

        afrad.push(fard);
        this.setState({afrad , fard : ""})
      }
      toast.success("شخص با موفقیت اصافه شد" , {
        position : 'top-right',
        closeButton : true,
        closeOnClick:true
      }
      ); 
     }

     setPerson = event =>{
      this.setState({fard : event.target.value})
     }

    


     render(){
  
      const {afrad , showperson} = this.state;

let pers = null;



if(showperson){
  pers=( 
        <Persons 
          // afrad={afrad}
          // delet={this.handleDeletPerson}
          // nameChange = {this.handleNameChange}
          // personAdd = {this.handleAddPerson}
      />);
}


      return(

        <SimpleContext.Provider value={{
          state : this.state,
          handleAddPerson: this.handleAddPerson,
          handleDeletPerson : this.handleDeletPerson,
          handleNameChange : this.handleNameChange,
          setPerson : this.setPerson
        }}>
 <div >
           
           <Header 
          //  afradLength={afrad.length}
          //  appTitle={this.state.appTitle}
           />
     
    {/* addperson */}

    <NewPerson/>
    
  
      <Button onClick={this.handleShowPerson} variant={showperson ? 'success dokme' : "danger"}>نمایش </Button>
      {pers}
   <ToastContainer/>
         </div>
        </SimpleContext.Provider>

       
      )
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
