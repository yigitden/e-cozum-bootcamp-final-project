import { Avatar, Stack, Box } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import ProfileName from '../ProfileName'; 
import { getCookie } from '../../service/Api';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'; 
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'; 
 
const ProfileAvatar = ({handleSetIsLogged}) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const username = getCookie("username")
    
    const deleteCookie = (name) => {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }

      
      const handleLogout = () => {
        deleteCookie("token")
        handleSetIsLogged(false)
        handleClose()
        navigate("/auth")
      }
    
    return (
      <>
     
        <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
            backgroundColor: 'white',
            p: 2,

        }}
        >
            <Stack
            onClick={handleClick}
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{
                    borderRadius: 8,
                    padding: 1,
                    transition: '0.5s',
                    '&:hover': {
                        cursor:'pointer',
                        backgroundColor: grey[100],
                    }
                }}
            >
                <ProfileName username={username} />


                <Avatar
                    sx={{ bgcolor: blue[400] }}
                    alt={username}
                    src="/broken-image.jpg"
                />



            </Stack>
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
 
        <MenuItem onClick={() => handleLogout()}><LogoutIcon fontSize="small" sx={{mr:1}}/>Logout</MenuItem>
      </Menu>
        </Box>

        </>
    )

}

export default ProfileAvatar