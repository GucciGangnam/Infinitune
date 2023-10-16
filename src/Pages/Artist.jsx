// Imports 
import { Link } from "react-router-dom";

// Import Styles
import "./Artist.css"

// Import Hooks 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Component 
export const Artist = ({accessToken}) => {

    // set Params 
    const {id} = useParams();

    // fetch all albums for artist ID of {id} on mount
        // set Albums search parameters 
        let searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        // Function for searching for albums 
        



    return (
        <div className="Artist">
            Artist page for {id}
        </div>
    )
}