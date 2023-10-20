// Impoort Styles 
import "./CountrySelector.css"

// Import Hooks 
import { useState, useEffect } from "react"


// Component 

export const CountrySelector = ({countries, currentCountry, setCurrentCountry}) => {



    // Button Handlers 
    const handleCountryClick = (index) => {
        setCurrentCountry(countries[index])
        console.log(countries[index])
    }



    return (
        <div className="CountrySelector">
            <button className="Country">
            <div className="CountryCode">{currentCountry.code}</div>
                <img className="Flag" src={currentCountry.flagSrc} />
            </button>
            {countries && countries.length > 0 && countries.map((country, index) => (
                <button
                    className="Country"
                    key={index}
                    onClick={() => handleCountryClick(index)}
                >
                    <div className="CountryCode">{country.code}</div>
                    <img className="Flag" src={country.flagSrc} alt={country.code} />
                </button>
            ))}
        </div>
    )
}