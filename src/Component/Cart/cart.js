import React, { useContext } from "react";
import "./cart.css";
// import {CartContext} from '../../Context/CartContext'
import ItemCart from "./Component/itemCart";
import { Link } from "react-router-dom";

function Cart() {
  //     const [cart] = useContext(CartContext);

  return (
    <div className="bg">
      <div className="container-cart">
        <ItemCart />
        {/* <FormBuy /> */}
        <Link to="/">
          <button className="back">Volver</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
