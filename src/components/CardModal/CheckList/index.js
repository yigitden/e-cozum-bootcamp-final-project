import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { grey } from '@mui/material/colors';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'; 

import { deleteCheckList, getAllCard } from '../../../features/CardSlice';
import { useAppDispatch } from '../../../store';
import ChecklistItem from './ChecklistItem';


const CheckList = ({ check }) => {
console.log(typeof(check))
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useAppDispatch()

    const handleDeleteCheckList = (id) => {
        dispatch(deleteCheckList(id))
        dispatch(getAllCard())
        console.log(id)
        handleClose()
    }
 

    return (
        <>
            {check && check.map((i) => (
                <>
                <Box sx={{ display: 'flex', mt: 13, alignItems: 'center' }}>
                    <Box sx={{ display: 'flex' }}>
                        <CheckBoxOutlinedIcon />
                        <Typography> {i.title} - {i.id} </Typography>
                    </Box>

                    <Box sx={{ display: 'flex' }}>


                        <MoreVertIcon
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{
                                '&:hover': {
                                    backgroundColor: grey[300],
                                    cursor: 'pointer',
                                    borderRadius: 12
                                }
                            }}
                        />
                        <Menu
                            id="basic-menu"
                            onClose={handleClose}
                            anchorEl={anchorEl}
                            open={open}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem id={i.id}  onClick={(e) => handleDeleteCheckList(e.target.id)}><DeleteOutlineIcon sx={{ mr: 1 }} />Remove List</MenuItem>
                            <MenuItem  ><EditOutlinedIcon sx={{ mr: 1 }} />Rename List</MenuItem>

                        </Menu>

                    </Box>
 
                </Box>
<Box>
     <ChecklistItem/>
</Box>

</>
            ))}


        </>

    )
}

export default CheckList

