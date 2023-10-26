// Import Styles 
import "./Search.css"

// Imports 
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Link } from "react-router-dom"


// Component
export const Search = ({ accessToken }) => {

    //useParams
    const { id } = useParams();

    // States 
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // fetch top 10 results for search criteria

    // Button Handlers 

    //Handle View Album 

    const handleViewAlbums = (artistID) => { 
        console.log(artistID)
    }

    // Handle show 10 more (fetch another 10 artists)
    const handleshow10more = () => {
        let offset = searchResult.length;
        // Search paremeters
        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }

        const fetchSearchResults = async () => {
            try {
                const response = await fetch(`https://api.spotify.com/v1/search?q=${id}&type=artist&market=GB&limit=10&offset=${offset}`, searchParameters);

                if (response.ok) {
                    const data = await response.json();
                    let newData = [...searchResult, ...data.artists.items];
                    setSearchResult(newData);
                    setLoading(false);
                    setError(false);
                    console.log('fetch');
                } else {
                    console.log('Failed to fetch search results');
                    setLoading(false);
                    setError(true);
                    console.log('fetch');
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
                setError(true);
                console.log('fetch');
            }
        }
        fetchSearchResults();
    }


    useEffect(() => {
        // Search paremeters
        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }

        const fetchSearchResults = async () => {
            try {
                const response = await fetch(`https://api.spotify.com/v1/search?q=${id}&type=artist&market=GB&limit=10&offset=0`, searchParameters);

                if (response.ok) {
                    const data = await response.json();
                    setSearchResult(data.artists.items);
                    setLoading(false);
                    setError(false);
                    console.log(data.artists.items);
                } else {
                    console.log('Failed to fetch search results');
                    setLoading(false);
                    setError(true);
                    console.log('fetch');
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
                setError(true);
                console.log('fetch');
            }
        }
        fetchSearchResults();
    }, [id, accessToken])

    if (loading) {
        return (
            <div className="Search">
                Loading Search Results for {id};
            </div>
        )
    }

    if (error) {
        return (
            <div className="Search">
                There has been an error collecting the search results for {id};
                Please try again.
            </div>
        )
    }

    return (
        <div className="Search">
            <div className="SearchTitle">
                Top 10 results for {id}
            </div>
            {searchResult.map((artist) => (
                <div key={artist.id} className="SearchResult">
                    <div className="SearchResultLeft1">
                        <img className="SearchArtistImage"
                            src={
                                artist.images[1]?.url ||
                                '/NoArtistImage.jpg'
                            }
                            alt="Artist Photo"
                        />
                    </div>
                    <div className="SearchResultLeft2">
                        <p className="SearchResultArtistName">{artist.name}</p>
                        <p>
                            Genre:{' '}
                            {artist.genres[0]}
                        </p>
                        Followers:{' '}
                        {artist.followers.total}
                    </div>
                    <div className="SearchResultRight2">
                        <button className="SpotifyButton" onClick={() => window.location.href = artist.uri}>
                            <img className="SpotifyLogo" src="/SpotifyLOGO.png" alt="Spotify Logo" />
                        </button>
                    </div>
                    <div className="SearchResultRight1">

                        <Link to={`/artist/${artist.id}`}>
                            <button className="SearchResultViewAlbum">View Albums</button>
                        </Link>


                    </div>
                </div>
            ))}
            <button className="ShowMoreButton" onClick={handleshow10more} >Show 10 more</button>

        </div>
    )
}

