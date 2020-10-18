import React from 'react';
import './input.css';


function Input(props) {



    return (
        <input onChange={props.changeName} onKeyDown={props.onKeyDown} placeholder="Busca lo que quieras"></input>
    );
  }
  
  export default Input;