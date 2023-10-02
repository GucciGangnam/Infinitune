// Imports 
    // Style 
    import "./PageBrowse.css"

    // Components
    import { NavBar } from "./Components/NavBar";





// Component 

export const PageBrowse = () => { 

    



    return ( 
        <div className="PageBrowse">
            <NavBar/>
            <div className="PageBrowseContainer"> 
                <div className="BrowseByContainer">
                    <h3>Broswe By Newest</h3>
                </div>
                <div className="BrowseByContainer">
                    <h3>Broswe By Trending</h3>
                </div>
                <div className="BrowseByContainer">
                    <h3>Broswe By Artist</h3>
                </div>
                <div className="BrowseByContainer">
                    <h3>Broswe By Genre</h3>
                </div>
                <div className="BrowseByContainer">
                    <h3>Broswe By Mood</h3>
                </div>
            </div>
        </div>
    )
}