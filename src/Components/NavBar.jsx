// Imports

// Import Style 
import "./NavBar.css"


// Component

export const NavBar = ({currentPage, setCurrentPage}) => { 
    return ( 
        <div className="NavBar">

            <div className="NavBarLeft">
                <h1>{currentPage}</h1>
            </div>

            <div className="NavBarRight">
                <ul>
                    <button className="NavButton">Home</button>
                    <button className="NavButton">Products</button>
                    <button className="NavButton">Something</button>
                </ul>
                <button className="CartButton">Cart</button>
            </div>

        </div>
    )
}