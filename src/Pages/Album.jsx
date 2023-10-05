// Import Style
import "./Album.css"

// Import Hooks
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"



// Component 

export const Album = ({accessToken}) => { 
    // useParams 
    const { id } = useParams();
    // States 
    const [album, setAlbum] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    // Fetch Album from Spotify API
        // set album Parameters
        useEffect(()=> { 
            var albumParameters = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }
            }
            // Fetch album
            const fetchAlbum = async () => {
                try {
                    const response = await fetch(`https://api.spotify.com/v1/albums/${id}?market=GB`, albumParameters
                    );
                    if (response.ok) {
                        const data = await response.json();
                        setAlbum(data);
                        setLoading(false);
                        console.log(data);
                    } else {
                        console.error('Failed to fetch album');
                        // setError(true);
                    }
                } catch (error) {
                    console.error('Error fetching album:', error);
                    setError(true);
                }
            };
            fetchAlbum();
        },[])

    // Conditional rendering based on loading state
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching album data.</p>;
    }

    // Only render album details if album data is available
    return (
        <div className="Album">

            <div className="AlbumLeftDiv"> 
                <img className="AlbumAlbumCover" src={album.images[0].url} alt={`Album cover for ${album.name}`} />
                <button className="TracklistButton">Tracklist</button>
            </div>

            <div className="AlbumRightDiv">
                <div className="AlbumRightDivContent">
                <p>{album.name}</p>
                <p>{album.artists[0].name}</p>
                <div className="TracklistDiv">
                    {album.tracks.items.map((track) => ( 
                        <div key={track.id} className="TrackDiv">
                            {track.name}
                        </div>
                    ))}
                </div>
                </div>
                
                <button className="AddToCartButton">Add to cart</button>
            </div>

        </div>
    );
}