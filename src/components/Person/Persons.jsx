import React,{ Component } from 'react';
import Person from './Person';
import SimpleContext from '../../context/SimpleContext';
import { Col, Row } from 'reactstrap';


class Persons extends Component {

    static contextType = SimpleContext;

//     shouldComponentUpdate(nextProps , nextState){
// console.log("persons.jsx , shouldComponentUpdate");

//    if(nextState.afrad !== this.context.state.afrad){
//     return true ;
//    }else{
//     return false;
//    }
//     }

    render() {

        const{handleDeletPerson , handleNameChange , state} = this.context



        return (
          
                    <div style={{ display: 'flex', flexDirection: "row", flexWrap: "wrap" }}  >
                        {state.afrad.map(fard => (
                            <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                                <Person
                                    key={fard.id}
                                    fullname={fard.fullname}
                                    deleted={() => handleDeletPerson(fard.id)}
                                    changed={event => handleNameChange(event, fard.id)}

                                />
                            </Col>
                        ))}
                    </div>
             

        );
    };
};

export default Persons;









// className='col-md-6 col-lg-6 col-xl-6'