import React, { useContext } from 'react';
import './cart.css';
// import {CartContext} from '../../Context/CartContext'
import ItemCart from './Component/itemCart'

function Cart() {

//     const [cart] = useContext(CartContext);


    return (

          <div className="bg">
                
                <div className="container">
                  <h2>Carrito de Compras</h2>
                  <ItemCart/>
                </div>

          </div>

    );
  }
  
  export default Cart;