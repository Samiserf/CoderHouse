import React, { useContext } from 'react';
import './cart.css';
// import {CartContext} from '../../Context/CartContext'
import ItemCart from './Component/itemCart'
// import FormBuy from './../Form_buy/formBuy'

function Cart() {

//     const [cart] = useContext(CartContext);


    return (

          <div className="bg">
                
                <div className="container-cart">
                  <ItemCart/>
                  {/* <FormBuy /> */}
                </div>

          </div>

    );
  }
  
  export default Cart;