import React from 'react';

function InputForm(props) {

    return (
        <>
          <input onChange={props.onChange} type={props.type} placeholder={props.placeholder} name={props.name}></input>
          { !props.datos && props.send && <span id="fullName">Por favor complete el campo</span>}
          {/* {props.datos == null && props.send && props.setSend(false)} */}
        </>
    );
  }
  
  export default InputForm;