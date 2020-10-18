import React from 'react';
import './button.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";


function Button(props) {


    return (
        <div>
            <NavLink to={`/${props.path}${props.id}`} className="button" key='1'>
                <button>
                    {props.text}
                </button>
            </NavLink>
        </div>
    );
  }
  
  export default Button;


//   {/* <button>
//                  {props.text}
//             </button> */}