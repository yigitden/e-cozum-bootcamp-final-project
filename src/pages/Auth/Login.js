import { TextField,Box} from '@mui/material';
import axios from 'axios';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import Button from '../../components/Button';
 


const Login = ({setIsLogged}) => {

    const [loginFormData, setLoginFormData] = useState({}); 

    const handleLoginFieldChange = (event) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setLoginFormData(prev => ({ ...prev, [name]: value }))
      }

    const handleLogin = () => {
        axios
          .post('http://localhost:80/auth/login', loginFormData)
          .then((response) => {
            document.cookie = `token = ${response.data.token}`
            document.cookie = `username=${response.data.username}` 
            setIsLogged(true)
          })
      }
      
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', mx: "auto" }}>
            <Box><LoginIcon color="primary" sx={{ fontSize: 50, my: 3 }} /></Box>
            <TextField sx={{ mb: "2rem" }} id="outlined-basic" name="username" onChange={handleLoginFieldChange} label="Username" variant="standard" />
           <TextField sx={{ mb: "2rem" }} id="outlined-basic" name="password" onChange={handleLoginFieldChange} label="Password" type="password" variant="standard"/>
            <Button 
            onClick={handleLogin} 
            variant="contained"
            text="LOGIN"
            />
            
        </Box>
    )
}

export default Login