import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography } from '@mui/material';
import AddMember from '../AddMember'; 
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../store" 

const MenuIcon = () => {
  const { id } = useParams()
    
   
  const dispatch = useAppDispatch()



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
<>
   <GroupIcon sx={{
    '&:hover': {
      cursor: 'pointer', 
    }
   }}
       onClick={handleClick} fontSize="large"  color="primary"/>

 
       <Menu
       
       id="basic-menu"
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       
   
     > 

     <Box sx={{width:250,p:2, display:'flex',flexDirection:'column'}}>
     <AddMember/>
     <Typography sx={{fontWeight:'medium',mt:2 }}>Members:</Typography>

      
  <MenuItem onClick={handleClose}> </MenuItem>
      
     </Box>

     </Menu>
 

</>

  )
}

export default MenuIcon