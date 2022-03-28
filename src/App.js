import { useState, useEffect } from 'react'; 
import Auth from './pages/Auth/Auth';
import Boards from './pages/Boards'; 
import Board from './pages/Board';
import { BrowserRouter,Routes, Route,Navigate } from "react-router-dom"; 
function App() {
  
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
    const token = getCookie("token") 
  
  
    const [isLogged, setIsLogged] = useState(false)
    const handleSetIsLogged = (param) => {
      setIsLogged(param)
    }
    useEffect(() => {
      
      if (token) setIsLogged(true)
    },[])

 
  return (
   
    <BrowserRouter>
      <Routes>

        <Route path="/" element={isLogged ? <Boards handleSetIsLogged={handleSetIsLogged}/> : <Navigate to="auth" />} />
        <Route path="auth" element={!isLogged ? <Auth setIsLogged={handleSetIsLogged}/>  :  <Navigate to="/" /> } />
        <Route path="board/:id" element={isLogged ? <Board/>  : <Navigate to="auth" />} />


      </Routes>
    </BrowserRouter>



 

  )
}




export default App;
