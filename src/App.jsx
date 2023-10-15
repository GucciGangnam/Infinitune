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
import { Artist } from './Pages/Artist'
import { Album } from './Pages/Album'
import { Cart } from './Pages/Cart'
import { Search } from './Pages/Search'

// Import Components 
import { NavBar } from './Components/NavBar'



export const App = () => {

  const [accessToken, setAccessToken] = useState(null);
  const [cart, setCart] = useState([]);
  // const [userCountry, setUserCountry] = useState(null);

  // fetch users country location
// NOT DONE YET - TRY WORK THIS ONE OUT!!!!!!!!!!!!//////////////////////////

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
        throw error;
      }
    }
    fetchAccessToken();
  }, [])


  return (
    <div className='App'>
      <NavBar accessToken={accessToken} cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Home accessToken={accessToken} />} />
        <Route path="/browse" element={<Browse accessToken={accessToken} />} />
        <Route path="/album" element={<ErrorPage/>}/>
        <Route path="/album/:id" element={<Album accessToken={accessToken} cart={cart} setCart={setCart}/>} />
        <Route path="/results/:id" element={<Search accessToken={accessToken}/>}/>
        <Route path="/artist" element={<ErrorPage/>}/>

        <Route path="/cart" element={<Cart accessToken={accessToken} cart={cart} setCart={setCart}/>} />
        <Route path="*" element={<ErrorPage/>} />

      </Routes>
    </div>
  )
}

export default App
