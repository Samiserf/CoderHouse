import React, { useContext, useEffect, useState } from 'react';
import './cartList.css';
import {
    BrowserRouter as 
    Link, NavLink
  } from "react-router-dom";
import Button from '../Button/button'
import {CartContext} from '../../Context/CartContext'

function CartList(props) {

    

    const [cart,setCart] = useContext(CartContext);

    function increaseCart(){
        setCart(currentCart =>  cart+1)
        // setCart(cart+1)
    }


    return (
      <div className="content-CartList">

            <div className="container">
                <div className="grid-row">
                    {props.data.map( (pais, i) =>
                    <>
                        
                                    <div className="grid-item-wrapper">
                                    <NavLink to={`/pais/${pais.id }`} className="grid-item" key={i}>
                                        <div className="imagenPais">
                                            <img style={{backgroundImage : `url(${pais.thumbnail})`}}></img>
                                        </div>
                                        <div className="description-country">
                                            <h3>{pais.title}</h3>

                                            <p>Precio $: <span>{pais.price}</span></p>
                                            <p>Condicion: <span>{pais.condition}</span></p>
                                            {/* <p>Capital: <span>{pais.capital}</span></p> */}
                                        </div>
                                    </NavLink>
                                        <button className="cart" onClick={increaseCart}>
                                            AGREGAR AL CARRITO
                                        </button>
                                        
                                    </div>
                        
                        
                    </>
                    )}
                </div>
            </div>
        
      </div>
    );
  }
  
  export default CartList;