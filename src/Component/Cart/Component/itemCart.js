import React, { useContext } from 'react';
import './itemCart.css';

function ItemCart() {



    return (

          <div className="product-cart">
              <div className="info-left">
                <img src="https://rockcontent.com/es/wp-content/uploads/2019/02/o-que-e-produto-no-mix-de-marketing-1280x720.png" alt="product"/>
                <h3>Cabo canaveral</h3>
              </div>
              <div className="info-right">
                <h3>$1314</h3>
                <h3>SUMAR O RESTAR</h3>
                <p>X</p>
              </div>
          </div>

    );
  }
  
  export default ItemCart;