import React, { useContext, useEffect, useState } from 'react';
import './cartList.css';
import {
    BrowserRouter as 
    Link, NavLink
  } from "react-router-dom";
import {CartContext} from '../../Context/CartContext';
import {getFirestore} from '../../Firebase/index';

function CartList(props) {

    

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
                setCart([...cart,{id: doc.id, ...doc.data()}]);
            }
        })
        .catch ( (error) => {console.log("Algo fallo", error);} )


    }



    return (
      <div className="content-CartList">

            <div className="container">
                <div className="grid-row">
                    {props.data.map( (item, index) =>
                    <>
                        
                                    <div className="grid-item-wrapper">
                                    <NavLink to={`/pais/${item.id }`} className="grid-item" key={index}>
                                        <div className="imagenPais">
                                            <img style={{backgroundImage : `url(${item.image})`}}></img>
                                        </div>
                                        <div className="description-country">
                                            <h3>{item.title}</h3>

                                            <p>Precio $: <span>{item.price}</span></p>
                                            <p>Condicion: <span>{item.condition}</span></p>
                                            {/* <p>Capital: <span>{pais.capital}</span></p> */}
                                        </div>
                                    </NavLink>
                                        <button className="cart" onClick={() => increaseCart(item.id)}>
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