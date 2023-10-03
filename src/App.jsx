// Import Hooks 
import { useState, useEffect } from 'react'

// Import Routes 
import { Route, Routes } from 'react-router-dom'

// Import Style
import './App.css'

// Import Pages 
import { Home } from './Pages/Home'
import { Browse } from './Pages/Browse'
import { ErrorPage } from './Pages/ErrorPage'
import { Product } from './Pages/Product'

// Import Components 
import { NavBar } from './Components/NavBar'


export const App = () => {

  const [accessToken, setAccessToken] = useState(null);

  //Fetch SiteWide Spotify Access Token
  useEffect(() => {
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
    // Define an async function to perform the fetch
    async function fetchAccessToken() {
      try {
        const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
        const data = await response.json();
        console.log("AccessToken Received");
        setAccessToken(data.access_token);
        return data.access_token;
      } catch (error) {
        console.error("Error fetching access token:", error);
        throw error; // You can handle the error as needed
      }
    }
    fetchAccessToken();
  }, [])

  //use Effect to ensure accessToken is updating
  useEffect(() => { 
    console.log("theaccess token is" + accessToken)
  },[accessToken])


  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home accessToken={accessToken} />} />
        <Route path="/browse" element={<Browse accessToken={accessToken} />} />
        <Route path="/browse/product/:id" element={<Product accessToken={accessToken} />} />

        <Route path="*" element={<ErrorPage/>} />

      </Routes>
    </div>
  )
}

export default App
