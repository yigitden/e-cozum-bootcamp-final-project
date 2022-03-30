import { TextField, Box } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import Button from "../../components/Button";

import { useCookies } from "react-cookie";
import { useAppDispatch } from "../../store";
import { setIsLogged } from "../../features/AuthSlice"; 
import Api from "../../service/Api";


const Login = () => {
  const [loginFormData, setLoginFormData] = useState({});
  const handleLoginFieldChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [cookies, setCookie, removeCookie] = useCookies(['token', 'username']);
  const dispatch = useAppDispatch();

  const handleLogin =  () => {
    
    Api()
      .post("auth/login", loginFormData)
      .then((response) => {
        setCookie('token', response.data.token, { path: '/' });
        setCookie('username', response.data.username, { path: '/' });
        dispatch(setIsLogged(true)); 
        console.log(cookies)
        
      })
      .catch((err) => alert('Wrong username or paassword'));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
        mx: "auto",
      }}
    >
      <Box>
        <LoginIcon color="primary" sx={{ fontSize: 50, my: 3 }} />
      </Box>
      <TextField
        sx={{ mb: "2rem" }}
        id="outlined-basic"
        name="username"
        onChange={handleLoginFieldChange}
        label="Username"
        variant="standard"
      />
      <TextField
        sx={{ mb: "2rem" }}
        id="outlined-basic"
        name="password"
        onChange={handleLoginFieldChange}
        label="Password"
        type="password"
        variant="standard"
      />
      <Button onClick={handleLogin} variant="contained" text="LOGIN" />
    </Box>
  );
};

export default Login;
