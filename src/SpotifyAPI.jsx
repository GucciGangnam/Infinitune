// Import Hooks 
import { useEffect, useState } from "react";



// Functions  //

//FETCH SPOTIFY API TOKEN
export const generateAccessToken = async () => {
    // Hard Code Spotify Client Serials
    const CLIENT_ID = "8bf6beb27af64340908ea42ff1a4c32f";
    const CLIENT_SECRET = "bcd8107759c749adb6642a17368e006f";
    
    // Set fetch parameters
    const authParameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    };
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Error fetching access token:", error);
        throw error; // You can handle the error as needed
    }
};

// FETCH TOP 4 NEW RELEASES //

export const fetchTop4NewReleases = () => { 



    
}
















