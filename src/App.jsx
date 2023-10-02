// Imports 
import { useState, useEffect } from "react"
// Import Styles 
import "./App.css"
// Import Components 
import { NavBar } from "./Components/NavBar";
import { PageHome } from "./PageHome"
import { generateAccessToken } from "./SpotifyAPI";


// Component 

export const App = () => {

  //Fetch API Access Token for site wide use
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await generateAccessToken();
            setAccessToken(result);
        } catch (error) {
            console.error(error);
        }
    };
    fetchData();
}, []);

// Logging out the access token once its upadted just to check its happening 
useEffect(() => { 
  console.log(accessToken)
}, [accessToken])


  const [currentPage, setCurrentPage] = useState('Home');
  return (
    <div className="App">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageHome accessToken={accessToken} />
    </div>
  )
}