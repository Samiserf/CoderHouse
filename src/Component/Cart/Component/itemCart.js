import React, { useContext } from 'react';
import './itemCart.css';
import {CartContext} from '../../../Context/CartContext'

function ItemCart() {

  const [cart] = useContext(CartContext);

    return (

      cart.map( (item) => 
        <div className="product-cart">
          <div className="info-left">
            <img src={item.thumbnail} alt="product"/>
            <div className="description">
              <a href="#">{item.title}</a>
              <span>Precio unitario:</span>
            </div>
            
          </div>
          <div className="info-right">
            <h3>${item.price}</h3>
            <h3>SUMAR O RESTAR</h3>
            <p>X</p>
          </div>
        </div>
      )

          

    );
  }
  
  export default ItemCart;