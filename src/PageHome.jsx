// import hooks
import { useEffect, useState } from "react";


//Import Styles 
import "./PageHome.css"

// Import Components 
import { NavBar } from "./Components/NavBar";



// Component 
export const PageHome = ({ accessToken }) => {

    const [newReleases, setNewReleases] = useState([]);

    // Fetch top 5 new releases 
    var newReleaseParameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    }

    useEffect(() => {
        // Fetch top 5 new releases when the component mounts
        const fetchNewReleases = async () => {
            try {
                const response = await fetch('https://api.spotify.com/v1/browse/new-releases?country=GB&limit=4&offset=0', newReleaseParameters
                );

                if (response.ok) {
                    const data = await response.json();
                    setNewReleases(data.albums.items);
                    console.log(data.albums.items)// Assuming the data structure has an "items" array with new releases
                } else {
                    console.error('Failed to fetch new releases');
                }
            } catch (error) {
                console.error('Error fetching new releases:', error);
            }
        };

        fetchNewReleases();
    }, [accessToken]);

    //display top 5 new releases
    return (
        <div className="PageHome">

            <div className="HeroTextDiv">
                <p className="HeroText">Infinitune</p>
                <h2>Really feel your music</h2>
            </div>

            <section className="NewReleaseSection">
                <h3>Trending New Releases</h3>
                <div className="NewReleasePhotoDiv">
                    {newReleases.map((release) => (
                        <div key={release.id} className="NewReleaseImageContainer">
                            <img className="HomeCovers" src={release.images[0].url} alt={release.name} />
                            <p className="CoverOverlayText">{release.name} <br/>{release.artists[0].name} </p>
                            
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}