import React, { useContext, useEffect, useState } from 'react';
import './nav.css';
import {CartContext} from '../../Context/CartContext'


function NavBar(props) {

  const [shadow,setShadow] = useState(false);
  const [cart] = useContext(CartContext);



  useEffect( () => {

    function onScroll(){
      if(window.scrollY>50){
        setShadow(true);
      }else{setShadow(false);}
      
    }
    document.addEventListener("scroll",onScroll)
    return () => {
      document.removeEventListener("scroll",onScroll)
    }
  })

  useEffect( () => {
    console.log("asd")
  },[cart])

    console.log("nav:"+ cart)
    return (
      <div className={shadow ? "shadow" : "NavBar"}>
        
    <i class="fa fa-shopping-cart"><sup>{<CartContext.Consumer>{context => {return cart}}</CartContext.Consumer>}</sup></i>
        <button onClick={props.changeTheme}><i class="fa fa-moon-o" aria-hidden="true"></i> Black mode</button>
      </div>
    );
  }
  
  export default NavBar;