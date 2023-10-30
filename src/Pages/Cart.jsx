// Imports 
//Styles
import "./Cart.css"

// Hooks 
import { useState, useEffect } from "react";





// Component 

export const Cart = ({ accessToken, cart, setCart }) => {



// state 
const [totalItems, setTotalItems] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);

// update total Items 
useEffect(() => { 
    let totalI = 0;
    for (let i=0; i< cart.length; i++){ 
        totalI = (totalI + cart[i].quantity)
    }
    setTotalItems(totalI)
},[cart])
// update total Price 
useEffect(() => { 
    let totalP = 0;
    for (let i=0; i< cart.length; i++){ 
        totalP = (totalP + (cart[i].quantity * cart[i].price))
    }
    setTotalPrice(totalP)
},[cart])


    /////////////////////// button handlers
    const handlePlusItem = (album) => {
        const updatedCart = cart.map((item) => {
            if (item.id === album.id) {
                item.quantity++;
            }
            return item;
        });
        setCart(updatedCart);
    };

    const handleMinusItem = (album) => {
        if (album.quantity <= 1){ 
            return; 
        } else {
        const updatedCart = cart.map((item) => {
            if (item.id === album.id) {
                item.quantity--;
            }
            return item;
        });
        setCart(updatedCart);
    }};

    const handleRemoveItem = (album) => { 
        const newCart = cart.filter(item => item !== album);
            setCart(newCart);
    }
    const handleCheckOutButton = () => { 
        alert("Thanks for checking out my site")
        setCart([]);
    }

    return (
        <div className="Cart">

            {cart.map((album) => (
                <div key={album.id} className="CartItemDiv">
                    <div className="CartItemLeft">
                        <img src={album.images[1].url} className="CartItemCover" />
                    </div>
                    <div className="CartItemInfo">
                        <div className="CartItemAlbumName">
                            Album: {album.name}
                        </div>
                        <div className="CartItemArtistsName">
                            Artist: {album.artists[0].name}
                        </div>
                        <div className="Price">${album.price}</div>
                    </div>
                    <div className="CartItemButton">
                        <div className="QuantButtons">
                            <button className="CartPlusItem" onClick={() => handlePlusItem(album)}>
                                <img className="CartPlusItemSRC" src="/Add.png" alt="PlusButton"/>
                            </button>
                            <button className="CartMinusItem" onClick={() => handleMinusItem(album)}>
                                <img className="CartMinusItemSRC" src="/Minus.png" alt="MinusButton"/>
                            </button>
                        </div>
                        <div className="Quantity">{album.quantity}</div>
                        <button className="CartRemoveItem" onClick={() => {handleRemoveItem(album)}}>
                            <img className="CartRemoveItemSRC" src="/Cancel.png" alt="RemoveButton"/>
                        </button>
                    </div>
                </div>
            ))}

            <div className="CheckoutBar">
                <div className="CheckoutLeft">
                    Checkout
                </div>
                <div className="CheckoutMid">
                    Items: {totalItems}
                </div>
                <div className="CheckoutRight">
                    Total: ${totalPrice.toFixed(2)}
                </div>
                <div className="CheckoutContinue">
                    <button className="CheckOutButton" onClick={handleCheckOutButton}>Checkout</button>
                </div>
            </div>

        </div>
    )
}