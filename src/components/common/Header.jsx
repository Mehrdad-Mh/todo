import {useContext} from 'react';
import { Alert, Badge } from "react-bootstrap";
import SimpleContext from '../../context/SimpleContext';



const Header = () => {

    const context = useContext(SimpleContext);

    const {afrad , appTitle} = context.state;

// useEffect(() => {
//     console.log("header.jsx useEffect")

//     const timer = setTimeout(() =>{
//         alert("data saved")
//     });
//     return () => {
//         console.log("Unmounted")
//         clearTimeout(timer);
//     }
// },[])


    let badgeStyle = [];

    if (afrad.length >= 3) badgeStyle = "success";
    if (afrad.length <= 2) badgeStyle = "warning";
    if (afrad.length <= 1) badgeStyle = "danger";
    return (
/* <SimpleContext.Consumer>
    {context => ( */

        <div>
            <Alert variant='info'><h2> {appTitle} </h2></Alert><br />

            <Alert variant='warning'>
                تعداد اشخاص {" "}
                <h2>
                    <Badge text='light' bg={badgeStyle}>
                        {afrad.length}
                    </Badge>{" "}
                </h2>
            </Alert>
        </div>
//     )}

// </SimpleContext.Consumer>
    );
}

export default Header;