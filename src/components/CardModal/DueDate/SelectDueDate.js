import React from 'react'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Box, Menu, Button, TextField, MenuItem, FormControlLabel } from '@mui/material';
import DueDate from '.';
import RemoveDueDate from './RemoveDueDate';



const SelectDueDate = ({card}) => {
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

    <CalendarMonthOutlinedIcon
        sx={{
            cursor: 'pointer',
            color: 'white',
            mr: 2
        }}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
    />

    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}
    >

        
            <MenuItem>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      {(card.duedate == null ) ? <DueDate card={card}/> :  <RemoveDueDate card={card} handleClose={handleClose}/>}
      

            </Box>
                
            </MenuItem>

    </Menu>

</>
  )
}

export default SelectDueDate