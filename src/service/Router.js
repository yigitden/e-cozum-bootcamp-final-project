import React from 'react'
import { Routes, Route} from "react-router-dom"; 
import Boards from '../pages/Boards';
import { BrowserRouter } from "react-router-dom";
import Board from '../pages/Board';


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Boards />} />
    <Route path="board/:id" element={<Board />} />
 
     
  </Routes>
  </BrowserRouter>

  )
}

export default Router