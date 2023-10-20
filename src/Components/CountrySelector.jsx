// Impoort Styles 
import "./CountrySelector.css"

// Import Hooks 
import { useState, useEffect } from "react"


// Component 

export const CountrySelector = () => {

    // Countries Object
    const countries = [
        { code: "US", flagSrc: "src/assets/Images/US.png" },
        { code: "CA", flagSrc: "src/assets/Images/CA.png" },
        { code: "GB", flagSrc: "src/assets/Images/GB.png" },
        { code: "FR", flagSrc: "src/assets/Images/FR.png" },
        { code: "DE", flagSrc: "src/assets/Images/DE.png" },
    ];

    const [currentCountry, setCurrentCountry] = useState(countries[0]);

    // Button Handlers 
    const handleCountryClick = (index) => {
        setCurrentCountry(countries[index])
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