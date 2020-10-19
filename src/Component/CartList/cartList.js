import React, { useContext, useEffect, useState } from 'react';
import './cartList.css';
import {
    BrowserRouter as 
    Link, NavLink
  } from "react-router-dom";
import {CartContext} from '../../Context/CartContext';
import {getFirestore} from '../../Firebase/index';
import Header from '.././Header/header'

function CartList(props) {

    const cantidad = 1;

    const [cart,setCart] = useContext(CartContext);

    function increaseCart(id){

        const db = getFirestore();
        const itemDoc = db.collection('items');
        const itemColection = itemDoc.doc(id);
        // const itemId = itemColection.where('{docs.id}', '==', 'nuevo');

        itemColection.get()
        .then((doc) => {
            if(!doc.exists){

                console.log("No existe el documento");
            }
            else{
                setCart([...cart,{id: doc.id, ...doc.data(), cantidad}]);
            }
        })
        .catch ( (error) => {console.log("Algo fallo", error);} )


    }



    return (
        
      <div className="content-CartList">
            <div>
             <Header />
            </div>
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