// Imports
import { Link } from "react-router-dom"

// Import Style 
import "./NavBar.css"


// Component

export const NavBar = ({currentPage}) => { 
    return ( 
        <div className="NavBar">

            <div className="NavBarLeft">
                <h1>{currentPage}</h1>
            </div>

            <div className="NavBarMiddle">
            <input className="SearchBar" type="search" id="search-bar" name="search" placeholder="Search by artist..."/>
            </div>

            <div className="NavBarRight">
                <ul>
                    <Link className="NavButton" to="/">Home</Link>
                    <Link className="NavButton" to="/browse">Browse</Link>
                    <Link className="NavButton" to="/error">ErrorPage</Link>
                </ul>
                <button className="CartButton">Cart</button>
            </div>

        </div>
    )
}