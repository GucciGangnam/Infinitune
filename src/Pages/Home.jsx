// Import Styles 
import "./Home.css"

// Import Hooks
import { useState, useEffect } from "react"


// Component 

export const Home = ({ accessToken }) => {

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
                const response = await fetch('https://api.spotify.com/v1/browse/new-releases?country=GB&limit=4&offset=0', newReleaseParameters
                );
                if (response.ok) {
                    const data = await response.json();
                    setNewReleases(data.albums.items);
                    setLoading(false);
                    // console.log(data.albums.items)
                } else {
                    console.error('Failed to fetch new releases');
                }
            } catch (error) {
                console.error('Error fetching new releases:', error);
                setError(true);
            }
        };
        fetchNewReleases();
    }, [accessToken]);

// If FETCH NEW RELEASE API fails
    if (error) {
        return <div className="Home">
            <div className="HeroTextDiv">
                <p className="HeroText">Infinitune</p>
                <h2>Really FEEL your music</h2>
            </div>
            <section className="NewReleaseSection">
                <h3>Trending New Releases</h3>
                <div className="NewReleasePhotoDiv">
                    <div>
                        Error loading album covers...
                        Try reloading the page
                    </div>
                </div>
            </section>
        </div>
    }
// While FETCH NEW RELEASE API Loads
    if (loading) {
        return <div className="Home">
            <div className="HeroTextDiv">
                <p className="HeroText">Infinitune</p>
                <h2>Really FEEL your music</h2>
            </div>
            <section className="NewReleaseSection">
                <h3>Trending New Releases</h3>
                <div className="NewReleasePhotoDiv">
                    <div className="LoadingNewReleaseImageContainer">
                        Loading album covers...
                    </div>
                    <div className="LoadingNewReleaseImageContainer">
                        Loading album covers...
                    </div>
                    <div className="LoadingNewReleaseImageContainer">
                        Loading album covers...
                    </div>
                    <div className="LoadingNewReleaseImageContainer">
                        Loading album covers...
                    </div>
                </div>
            </section>
        </div>
    }

// If FETCH NEW RELEASE API is successful 
    return (
        <div className="Home">
            <div className="HeroTextDiv">
                <p className="HeroText">Infinitune</p>
                <h2>Really FEEL your music</h2>
            </div>
            <section className="NewReleaseSection">
                <h3>Trending New Releases</h3>
                <div className="NewReleasePhotoDiv">
                    {newReleases.map((release) => (
                        <div key={release.id} className="NewReleaseImageContainer">
                            <img className="HomeCovers" src={release.images[0].url} alt={release.name} />
                            <p className="CoverOverlayText">{release.name} <br />{release.artists[0].name} </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}