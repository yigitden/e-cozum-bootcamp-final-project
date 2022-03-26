import { useState, useEffect } from 'react'; 
import Auth from './pages/Auth/Auth';
import Boards from './pages/Boards';
import Router from './service/Router'
import { Api } from './service/Api';
function App() {
  
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

  const token = getCookie("token") 


  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    
    if (token) setIsLogged(true)
  },[])
Api()
  return (
   
    <div> 
      {isLogged ? <Router /> : <Auth setIsLogged={setIsLogged} />}
    </div>

  )
}




export default App;
