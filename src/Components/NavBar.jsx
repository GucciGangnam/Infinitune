// Import Styles 
import "./NavBar.css"

// Import Links 
import { Link } from "react-router-dom"

// Import States 
import { useState } from "react"

// Import Components 
import { CountrySelector } from "./CountrySelector"


// Component 
export const NavBar = ({ accessToken, cart, setCart, countries, currentCountry, setCurrentCountry}) => {

    const [searchInput, setSearchInput] = useState("");

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleEnterKey = (event) => {
        if (event.key === 'Enter' && searchInput !== "") {
            document.getElementById('searchButton').click();
        }
    };

    return (
        <div className="NavBar">

            <div className="NavBarLeft">
                <Link to="/"><img className="SiteLogo" src="/LOGO2.png" alt="Site Logo" /> </Link>
            </div>

            <div className="NavBarMiddle">
                <input enterKeyHint="search" onChange={handleSearchInputChange} onKeyDown={handleEnterKey} autoCorrect="off" value={searchInput} className="SearchBar" type="search" id="search-bar" name="search" placeholder="Search by artist..." />
                {searchInput !== '' ? (
                    <Link to={`/results/${searchInput}`} id="searchButton" className="SearchButton">
                        <img className="SearchIcon" src="/SearchGlass1.png" alt="Search Icon" />
                    </Link>
                ) : (
                    null
                )}
            </div>

            <div className="NavBarRight">
                <ul>
                    <Link className="NavButton" id="HomeBTN" to="/">Home</Link>
                    <Link className="NavButton" id="NewBTN" to="/browse">New</Link>
                </ul>
                <CountrySelector countries={countries} currentCountry={currentCountry} setCurrentCountry={setCurrentCountry}/>
                <Link to="/cart" className="CartButton">Cart<div className="CartNotification">{cart.length}</div></Link>
            </div>

        </div>
    )
}
