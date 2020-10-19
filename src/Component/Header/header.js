import React, { useContext, useEffect, useState } from 'react';
import header from '../../images/header_03.jpg'


function Header(props) {

  

    return (
      <div className="backgroundHeader">
        <img src={header} alt="header"/>
      </div>
    );
  }
  
  export default Header;