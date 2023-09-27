// Imports 
import { useState, useEffect } from "react"
// Import Components 
import { NavBar } from "./Components/NavBar";


// Component 

export const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  return ( 
    <>
    <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
)
}