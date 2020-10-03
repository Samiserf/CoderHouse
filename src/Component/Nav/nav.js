import React, { useContext, useEffect, useState } from 'react';
import './nav.css';
import {CartContext} from '../../Context/CartContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


function NavBar(props) {

  const [shadow,setShadow] = useState(false);
  const [cart] = useContext(CartContext);

  console.log("nav = " +cart);

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

    return (
      <div className={shadow ? "shadow" : "NavBar"}>

        <NavLink to="/"><h1>Ecommerce</h1></NavLink>
        <NavLink className="carrito-fafa" to="/cart"><i class="fa fa-shopping-cart"><sup>{cart.length}</sup></i></NavLink>

        <button onClick={props.changeTheme}><i class="fa fa-moon-o" aria-hidden="true"></i> Black mode</button>
      </div>
    );
  }
  
  export default NavBar;