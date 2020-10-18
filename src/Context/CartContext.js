import React, { useContext, useState } from 'react';


export const CartContext = React.createContext(0);


export function CartProvider(props) {

    const [cart, setCart] = useState([]);

    

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )

}