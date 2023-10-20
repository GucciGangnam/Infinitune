// Import Styles 
import "./Browse.css"

// Import Hooks
import { useState, useEffect } from "react";

// Import Links 
import { Link } from "react-router-dom";



// Component 

export const Browse = ({ accessToken, currentCountry }) => {

    const [newReleases, setNewReleases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        // set new Release Parameters
        var newReleaseParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        // Fetch top 5 new releases when the component mounts
        const fetchNewReleases = async () => {
            try {
                const response = await fetch(`https://api.spotify.com/v1/browse/new-releases?country=${currentCountry.code}&limit=10&offset=0`, newReleaseParameters
                );
                if (response.ok) {
                    const data = await response.json();
                    setNewReleases(data.albums.items);
                    setLoading(false);
                    console.log("Fetch");
                } else {
                    console.error('Failed to fetch new releases');
                    console.log("Fetch");
                }
            } catch (error) {
                console.error('Error fetching new releases:', error);
                setError(true);
                console.log("Fetch");
            }
        };
        fetchNewReleases();
    }, [accessToken]);

    // Button Handlers 

    const handleshow10more = () => {
        let alreadyShowing = newReleases.length;

        // set new Release Parameters
        var newReleaseParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }

        // Fetch top 5 new releases when the component mounts
        const fetchNewReleases = async () => {
            try {
                const response = await fetch(`https://api.spotify.com/v1/browse/new-releases?country=${currentCountry.code}&limit=10&offset=${alreadyShowing}`, newReleaseParameters
                );
                if (response.ok) {
                    const data = await response.json();
                    let updatedReleases = [...newReleases, ...data.albums.items]
                    setNewReleases(updatedReleases);
                    // setLoading(false);
                    console.log(data.albums.items)
                } else {
                    console.error('Failed to fetch new releases');
                }
            } catch (error) {
                console.error('Error fetching new releases:', error);
                setError(true);
            }
        };
        fetchNewReleases();

    }




    return (
        <div className="Browse">
            <section className="BrowseByContainer">
                <h3>Browse New Releases from {currentCountry.name}</h3>
                <div className="NewReleasePhotoDiv">
                    {newReleases.map((release) => (
                        <Link to={`/album/${release.id}`} key={release.id} className="NewReleaseImageContainer">
                            <img className="HomeCovers" src={release.images[0].url} alt={release.name} />
                            <br />
                            <p className="CoverOverlayText"><strong>{release.name}</strong> <br /><br />{release.artists[0].name} </p>
                        </Link>
                    ))}
                </div>
                <div className="ShowMoreButtonContainer">
                    <button className="ShowMoreButton" onClick={handleshow10more} style={{
                        display: newReleases.length >= 100 ? "none" : "block"
                    }} >Show 10 more</button>
                </div>
            </section>
        </div>
    )
}