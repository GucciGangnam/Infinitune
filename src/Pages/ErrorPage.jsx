// Imports 
import { Link } from "react-router-dom";

// Import Styles
import "./ErrorPage.css"

// Component 
export const ErrorPage = () => {
    return (
        <div className="ErrorPage">
            <h1>Oops! You can't take the cart outisde the site.</h1>
            <h3><Link to="/">Bring it back to the shop</Link></h3>

            <img className="ErrorIMG" src="src/assets/Images/404Cart.png" alt="Crashed shopping cart" />
        </div>
    )
}