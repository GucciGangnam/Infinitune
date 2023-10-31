

// Import s
// Styles 
import "./CountrySelector-mobile.css"

// Compoinet 


export const CountrySelectorMobile = ({ setIsCSShowing, isCSShowing, countries, currentCountry, setCurrentCountry }) => {

    // Button Handlers 
    const handleCountryClick = (index) => {
        setCurrentCountry(countries[index])
        console.log(countries[index]);
        setIsCSShowing(false);
    }
    const handleCloseButton = () => { 
        setIsCSShowing(false);
    }

    return (
        <div className="CountrySelectorMobile">
            <div className="CountryContainerMobile">
                {countries && countries.length > 0 && countries.map((country, index) => (
                    <button
                        className="CountryMobile"
                        key={index}
                        onClick={() => handleCountryClick(index)}
                    >
                        <div className="CountryCodeMobile">{country.code}</div>
                        <img className="FlagMobile" src={country.flagSrc} alt={country.code} />
                    </button>
                ))}
                <button onClick={handleCloseButton} className="CountrySelectorCloseBtn">
                    <img className="CartRemoveItemSRC" src="/Cancel.png" alt="RemoveButton"/>
                </button>
            </div>
        </div>
    )
}