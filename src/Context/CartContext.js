import React, { useContext, useState } from 'react';
import {getFirestore} from '../Firebase/index';

export const CartContext = React.createContext(0);


export function CartProvider(props) {

    const [cart, setCart] = useState([]);
    const cantidad = 1;

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
        <CartContext.Provider value={[cart, setCart,increaseCart]}>
            {props.children}
        </CartContext.Provider>
    )

}