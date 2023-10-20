// Imports 
import { Link } from "react-router-dom";

// Import Styles
import "./Artist.css"

// Import Hooks 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Component 
export const Artist = ({accessToken, currentCountry}) => {

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // set Params 
    const {id} = useParams();

    // fetch all albums for artist ID of {id} on mount
        // set Albums search parameters 
        let albumParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        // Function for searching for albums 
        const fetchArtistAlbums = async (offset) => { 
            try { 
                const response = await fetch(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&market=${currentCountry.code}&limit=50&offset=${offset}`, albumParameters);

                if (response.ok) { 
                    const data = await response.json();
                    console.log(data.items);
                    setAlbums(data.items);
                    setLoading(false);
                    setError(false);
                } else { 
                    console.log('Failed to fetch artists albums');
                    setLoading(false);
                    setError(true);
                }
                } catch (error) {
                    console.error('Error fetching artist albums', error);
                    setLoading(false);
                    setError(true);
                }
            }

useEffect(() => { 
    fetchArtistAlbums(0);
},[])

if (loading){ 
    return ( 
        <div className="Artist">
            Loading artist discography 
        </div>
    )
}

if (error){ 
    return ( 
        <div className="Artist">
            Failed to load artist discography.  Please try again.
        </div>
    )
}

    return (
        <div className="Artist">
            <section className="BrowseByContainer">
                <h3>Albums by {albums[0].artists[0].name}</h3>
            <div className="NewReleasePhotoDiv">
            {albums.map((album) => ( 
                <Link to={`/album/${album.id}`} key={album.id} className="NewReleaseImageContainer">
                            <img className="HomeCovers" src={album.images[0].url} alt={album.name} />
                            <br />
                            <p className="CoverOverlayText"><strong>{album.name}</strong> <br /><br />{album.artists[0].name} </p>
                        </Link>
            ))}
            </div>
            </section>
        </div>
    )
}