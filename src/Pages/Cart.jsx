// Imports 
    //Styles
    import "./Cart.css"

    // Hooks 
    import { useState, useEffect } from "react";





// Component 

export const Cart = ({accessToken, cart, setCart}) => { 

    

    console.log(cart);

    return ( 
        <div className="Cart">
            <div className="CheckoutBar">
                Checkout bar
            </div>
            THis is teh cart
        </div>
    )
}