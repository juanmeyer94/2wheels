import { useDispatch } from 'react-redux'
import React from "react"
import './App.css'
import GameBoard from './components/GameBoard/gameBoard'
import LandingPage from './components/LandingPage/LandingPage'
import { Route, Routes } from 'react-router-dom'



function App() {


  return (
    <div>
      <Routes >
    <Route path="/" element={<LandingPage />}/>
    <Route path="/game" element={<GameBoard />}/>
    
   </Routes>
        
    </div>
  )
}

export default App
