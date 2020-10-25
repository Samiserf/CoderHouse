import React, { useContext, useEffect, useState } from 'react';
import './cartList.css';
import {
    BrowserRouter as 
    Link, NavLink
  } from "react-router-dom";
import {CartContext} from '../../Context/CartContext';

function CartList(props) {

    const [cart,setCart,increaseCart] = useContext(CartContext);

    return (
        
      <div className="content-CartList">
            <div className="container">
                <div className="grid-row">
                    {props.data.map( (item, index) =>
                    <>
                        
                                    <div className="grid-item-wrapper">
                                        <NavLink to={`/item/${item.id }`} className="grid-item" key={index}>
                                            <div className="productImage">
                                                <img style={{backgroundImage : `url(${item.image})`}}></img>
                                            </div>
                                            <div className="description-product">
                                                <h3>{item.title}</h3>

                                                <p><span>Precio</span> ${item.price}</p>
                                                <p><span>Condicion: </span>{item.condition}</p>
                                            </div>
                                        </NavLink>
                                        <button className="buttonBuy" onClick={() => increaseCart(item.id)}>
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