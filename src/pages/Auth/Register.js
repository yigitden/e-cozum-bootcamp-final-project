import { TextField,Box } from '@mui/material';
import { useState } from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Button from '../../components/Button';
import  Api  from '../../service/Api';
import { useAppDispatch } from '../../store';
import { useCookies } from 'react-cookie';
import { setIsLogged } from '../../features/AuthSlice';


const Register = () => {

    const [registerFormData, setRegisterFormData] = useState({});
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'username']);
    const dispatch = useAppDispatch();

    const handleRegisterFieldChange = (event) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setRegisterFormData(prev => ({ ...prev, [name]: value }))
      }
    
      const handleRegister = () => {
        Api()
          .post('auth/register', registerFormData)
          .then((response) => {
            setCookie('token', response.data.token, { path: '/' });
            setCookie('username', response.data.username, { path: '/' });
            dispatch(setIsLogged(true));
            
          }) 
      }

    return(
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',flexDirection:'column',mx: "auto" }}>                  
                  
                   <Box>
                     <PersonAddAltIcon color="primary"  sx={{ fontSize: 50, my: 3 }}/>
                     </Box> 

                    <TextField  sx={{mb:"2rem"}}  name="username" onChange={handleRegisterFieldChange} id="standard-required" label="Username"   variant="standard" />
                    <TextField  sx={{mb:"2rem"}}  name="password" onChange={handleRegisterFieldChange} id="standard-required" label="Password" type="password"    variant="standard"/>
                    <TextField  sx={{mb:"2rem"}}  name="passwordConfirm" onChange={handleRegisterFieldChange} id="standard-required" label="Password Confirm" type="password"    variant="standard" />
                    <Button 
            onClick={handleRegister} 
            variant="contained"
            text="REGISTER"
            />
                    </Box>
    )
}

export default Register