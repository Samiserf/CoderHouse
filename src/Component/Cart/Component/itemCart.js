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
              <p href="#">{item.title}</p>
            </div>
          </div>
          <div className="info-center">
            <div className="counter">
              <button className="signCounter" onClick={HandleDecrease}>-</button><span>{cart[id].cantidad}</span><button className="signCounter" onClick={ (( ) => HandleIncrease(id))}>+</button>
            </div>
          </div>
          
          <div className="info-right">
            <h3>Precio: ${Math.round(item.price * cart[id].cantidad)}</h3>
            <button className="delete" onClick={ () => deleteItem(id) }><i class="fa fa-trash"></i></button>
          </div>
        </div>
      )}
      <div className="final">
        <div>
          <span>Subtotal:</span>  $100 <br/>
          <span>Envío estimado</span> 21%
          <div className="line-cut"></div>
          <h3>Total: $2000</h3>
          <Link to="/cart/formBuy" className="buttonBuy">Comprar ahora</Link>
        </div>
      
      </div>
      
      </>
    );
  }
  }
  //push
  export default ItemCart;