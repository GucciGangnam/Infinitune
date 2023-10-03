// Import Styles 
import "./Browse.css"

// Import Hooks
import { useState, useEffect } from "react";



// Component 

export const Browse = ({accessToken}) => { 

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
                const response = await fetch('https://api.spotify.com/v1/browse/new-releases?country=GB&limit=10&offset=0', newReleaseParameters
                );
                if (response.ok) {
                    const data = await response.json();
                    setNewReleases(data.albums.items);
                    setLoading(false);
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
    }, [accessToken]);

    // Button Handlers 

    const handleshow50more = () => { 
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
                const response = await fetch(`https://api.spotify.com/v1/browse/new-releases?country=GB&limit=10&offset=${alreadyShowing}`, newReleaseParameters
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
                    <h3>Browse New Releases</h3>
                    <div className="NewReleasePhotoDiv">
                    {newReleases.map((release) => (
                        <div onClick={() => console.log(release.name + " clicked")} key={release.id} className="NewReleaseImageContainer">
                            <img className="HomeCovers" src={release.images[0].url} alt={release.name} />
                            <br/>
                            <p className="CoverOverlayText"><strong>{release.name}</strong> <br/><br/>{release.artists[0].name} </p>
                        </div>
                    ))}
                    </div>
                    <button onClick={handleshow50more}>SHow 10 more</button>
                </section>
        </div>
    )
}