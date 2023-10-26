// Import 
// Navigate
import { useNavigate } from 'react-router-dom';


// Hooks
import { useState } from "react";
// Links 
import { Link } from "react-router-dom";
// Stytles 
import "./Navbar-mobile.css"

// Component 
export const NavbarMobile = ({ accessToken, cart, setCart, countries, currentCountry, setCurrentCountry }) => {

    // Search Input 
    const [searchInput, setSearchInput] = useState("");
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Menu Button 
    const [menuStatus, setMenuStatus] = useState("closed")
    const handleMenuClick = () => {
        if (menuStatus === "closed") {
            setMenuStatus("open")
        }
        if (menuStatus === "open") {
            setMenuStatus("closed")
        }
    }
    const closeBurgerMenu = () => {
        setMenuStatus("closed")
    }


    const navigate = useNavigate();
    const handleEnterKey = (event) => {
        if (event.key === 'Enter' && searchInput !== "") {
            navigate(`/results/${searchInput}`);
        }
    };

    return (
        <div className="NavbarMobile">
            <div className='NavbarMobileTop'>
                <Link to="/"><img className="SiteLogo" src="/LOGO2.png" alt="Site Logo" /> </Link>
                    <input enterKeyHint="search" onChange={handleSearchInputChange} onKeyDown={handleEnterKey} autoCorrect="off" value={searchInput} className="SearchBar" type="search" id="search-bar" name="search" placeholder="Search by artist..." />
                <img onClick={handleMenuClick} className='MenuIcon' src='/Menu.png' alt='Menu icon' style={{ transform: menuStatus === 'open' ? 'rotate(90deg)' : 'none' }} />
                <div className="BurgerCartNotification">{cart.length}</div>


            </div>
            {menuStatus === "open" && (
                <div className='NavbarMobileBottom'>
                    <Link onClick={closeBurgerMenu} className="NavBurgerButton" to="/">Home</Link>
                    <Link onClick={closeBurgerMenu} className="NavBurgerButton" to="/browse">New</Link>
                    <button onClick={closeBurgerMenu} className='NavBurgerButton'>Country</button>
                    <Link onClick={closeBurgerMenu} to="/cart" className="CartButton">Cart<div className="CartNotification">{cart.length}</div></Link>
                </div>
            )}

        </div>
    )
}

