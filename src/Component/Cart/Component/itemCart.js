import React, { useContext, useEffect, useState } from 'react';
import './itemCart.css';
import './../../Button/button.css'
import {CartContext} from '../../../Context/CartContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function ItemCart() {

  const [countItem,setCountItem] = useState(1);
  const [cart,setCart] = useContext(CartContext);
  const [banderaCart, setBanderaCart] = useState(true);


  function HandleIncrease(id){
    if(cart[id].cantidad+1 <= cart[id].stock){
      setCountItem(countItem+1)
      cart[id].cantidad = cart[id].cantidad+1
    }
    else{
      alert("No hay stockillo");
    }
    
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
  },[cart])

console.log(cart == false)
  if(cart== false){
    return <div className="container-loading"><h2>No hay items en tu carrito</h2></div>
  }else{
    return (
      <>
      {cart.map( (item, id) => 
      
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
              <button onClick={HandleDecrease}>-</button><span>{cart[id].cantidad}</span><button onClick={ (( ) => HandleIncrease(id))}>+</button>
            </div>
            <div className="info-center_right">
              Subtotal: ${item.price * cart[id].cantidad}
            </div>
          </div>
          
          <div className="info-right">
            <h3>Subtotal: ${Math.round(item.price * cart[id].cantidad)}</h3>
            <span>IVA 21%: ${Math.round(item.price * cart[id].cantidad * 0.21)}</span>
            <span>Envío: $100</span>
            <div className="line-cut"></div>
            <h2>Total: ${Math.round(item.price * cart[id].cantidad * 1.21 + 100)}</h2>
            <div className="final_buy">
              <button onClick={ () => deleteItem(id) }><i class="fa fa-trash"></i></button>
            </div>
          </div>
        </div>
      )}
      <Link to="/cart/formBuy" className="buttonBuy">Comprar</Link>
      </>
    );
  }
  }
  //push
  export default ItemCart;