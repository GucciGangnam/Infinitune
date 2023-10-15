// Import Styles 
import "./Search.css"

// Imports 
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


// Component
export const Search = ({ accessToken }) => {

    //useParams
    const { id } = useParams();

    // States 
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // fetch top 10 results for search criteria


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
                const response = await fetch(`https://api.spotify.com/v1/search?q=${id}&type=artist&market=GB&offset=0`, searchParameters);

                if (response.ok) {
                    const data = await response.json();
                    setSearchResult(data);
                    setLoading(false);
                    setError(false);
                    console.log(data);
                } else {
                    console.log('Failed to fetch search results');
                    setLoading(false);
                    setError(true);
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
                setError(true);
            }
        }
        fetchSearchResults();
    },[id, accessToken])

if (loading){ 
    return ( 
        <div className="Search">
            Loading Search Results for {id};
        </div>
    )
}

if (error){ 
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
                Top 10 results for {id};
            </div>
            {searchResult.artists.items.map((artist)=> ( 
                <div key={artist.id} className="SearchResult"> 
                <img
                    src={
                        artist.images[2]?.url ||
                        'default-image-url-if-no-image-found'
                    }
                    alt="Artist Photo"
                />
                {artist.name}
                <br/>
                {artist.genres[0]}
                <br/>
                {artist.followers.total}
                <button>Open in spotify</button>
                <button>View Albums</button>
                </div>
            ))}
            
        </div>
    )
}