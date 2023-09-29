// import hooks
import { useEffect, useState } from "react";


//Import Styles 
import "./PageHome.css"


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
                const response = await fetch('https://api.spotify.com/v1/browse/new-releases?country=GB&limit=5&offset=0', newReleaseParameters
                );

                if (response.ok) {
                    const data = await response.json();
                    setNewReleases(data.albums.items); // Assuming the data structure has an "items" array with new releases
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
    //Cover pohoto 
    //Name
    //Artist 
    //Open Button
    return (
        <div className="PageHome">
            <h2>Top 5 New Releases</h2>
            <ul>
                {newReleases.map((release) => (
                    <li key={release.id}>
                        <img src={release.images[0].url} alt={release.name} />
                        <p>{release.name}</p>
                        <p>Artist: {release.artists[0].name}</p>
                        <button>Open</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}