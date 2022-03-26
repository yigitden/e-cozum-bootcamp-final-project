import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Box, Menu, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { addCheckLists, getAllCard } from '../../features/CardSlice';
import { useAppDispatch } from '../../store';
 

const AddCheckList = ({cardId}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [name, setName] =  useState('')
     
  const dispatch = useAppDispatch()

    const addCheckListItem = ()  => {
        const checkListData = {
            "title":`${name}`,
            "cardId":cardId
        }
         
        dispatch(addCheckLists(checkListData))
        dispatch(getAllCard())
        dispatch(getAllCard())
        setName("")
        handleClose()
    }


    return (
        <>
          
                <CheckBoxOutlinedIcon
                    sx={{ 
                        cursor: 'pointer',
                        color:'white',
                        mr:2 
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
                    <Box    sx={{
                width:'250px',
                height:'110px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-evenly',
                alignItems:'center',  
              
            }}  >
                    <TextField
                        required
                        id="outlined-required"
                        label="Checklist Title"
                        defaultValue=" "
                        onChange={(event) => setName(event.target.value)}
                    />
                    {name ? <Button sx={{alignSelf:'flex-end',mr:2}}  onClick={() => addCheckListItem()}>Add</Button> : <Button sx={{alignSelf:'flex-end',mr:2}} disabled>Add</Button>}
                    </Box>
                 
                </Menu>
         
        </>

    )
}

export default AddCheckList