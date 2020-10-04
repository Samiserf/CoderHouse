import React, { useContext, useEffect, useState } from 'react';
import './itemCart.css';
import './../../Button/button.css'
import {CartContext} from '../../../Context/CartContext'

function ItemCart() {

  const [countItem,setCountItem] = useState(1);
  const [cart,setCart] = useContext(CartContext);
  const [banderaCart, setBanderaCart] = useState(true);


  function HandleIncrease(){
    setCountItem(countItem+1)
  }
  function HandleDecrease(){
      setCountItem(countItem-1)
  }

  function deleteItem(id){
      cart.splice(id, 1);
      banderaCart ?  setBanderaCart(false) : setBanderaCart(true);
  }

  useEffect( () => {
    setCart(cart)
    console.log(cart)
  },[cart])

    return (

      cart.map( (item, id) => 
        <div className="product-cart">
          <div className="info-left">
            <img src={item.image} alt="product"/>
            <div className="description">
              <span className="link" href="#">{item.title}</span>
              <span>Precio unitario: ${item.price}</span>
            </div>
          </div>
          <div className="info-center">
            <div>
              <button onClick={HandleDecrease}>-</button><span>{countItem}</span><button onClick={HandleIncrease}>+</button>
            </div>
            <div className="info-center_right">
              Subtotal: ${item.price * countItem}
            </div>
          </div>
          
          <div className="info-right">
            <h3>Subtotal: ${Math.round(item.price * countItem)}</h3>
            <span>IVA 21%: ${Math.round(item.price * countItem * 0.21)}</span>
            <span>Envío: $100</span>
            <div className="line-cut"></div>
            <h2>Total: ${Math.round(item.price * countItem * 1.21 + 100)}</h2>
            <div className="final_buy">
              <button className="buttonBuy">Comprar</button>
              <button onClick={ () => deleteItem(id) }><i class="fa fa-trash"></i></button>
            </div>
          </div>
        </div>
      )

          

    );
  }
  
  export default ItemCart;