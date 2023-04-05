import {useContext} from 'react';
import { Alert, Badge } from "react-bootstrap";
import SimpleContext from '../../context/SimpleContext';



const Header = ({appTitle}) => {

    const context = useContext(SimpleContext);

    const {persons} = context


    let badgeStyle = [];

    if (persons.length >= 3) badgeStyle = "success";
    if (persons.length <= 2) badgeStyle = "warning";
    if (persons.length <= 1) badgeStyle = "danger";
    return (
/* <SimpleContext.Consumer>
    {context => ( */

        <div>
            <Alert variant='info'><h2> {appTitle} </h2></Alert><br />

            <Alert variant='warning'>
                تعداد اشخاص {" "}
                <h2>
                    <Badge text='light' bg={badgeStyle}>
                        {persons.length}
                    </Badge>{" "}
                </h2>
            </Alert>
        </div>
//     )}

// </SimpleContext.Consumer>
    );
}

export default Header;