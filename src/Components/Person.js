import React from 'react'; 
import CSSModules from 'react-css-modules';
import styles from '../Components/Person.css';


const person = (props) =>{
    return (
        <div className="card card-1" styleName='test'> 
            <div className="centerguy container">
               <h4 onClick={props.click}> {props.name}</h4>
               <p>{props.children}</p>
            </div>
        </div>
    )        
    }

export default  CSSModules(person, styles) ;