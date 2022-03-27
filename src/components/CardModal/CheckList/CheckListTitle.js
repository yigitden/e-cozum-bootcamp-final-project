import React, { useEffect, useState } from 'react'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { grey } from '@mui/material/colors';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { deleteCheckList, editCheckListName, getAllCard } from '../../../features/CardSlice';
import { useAppDispatch } from '../../../store';
import DoneIcon from '@mui/icons-material/Done';
import { Box, Typography, TextField, InputAdornment } from '@mui/material'
import { Api } from '../../../service/Api';
 

const CheckListTitle = ({checkList}) => {

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
        dispatch(getAllCard())
        handleClose()

    }

    
    const handleRenameCheckList = () => {
        setInputStatus(true)
        handleClose()

    }
    
    const [inputStatus, setInputStatus] = useState(false)
    const [checkListNameEdit, setCheckListNameEdit] = useState(`${checkList.title}`)
    
    const handleCheckListNameEdit = (id) => {
        const checkListNameEditInfo = {
            "title": `${checkListNameEdit}`,
            
        }
        dispatch(editCheckListName({
            checkListNameEditInfo,
            id}))
          
            dispatch(getAllCard()) 
            dispatch(getAllCard()) 
        handleClose() 
        setInputStatus(false)
    }



  return (
    <Box sx={{ display: 'flex', my:3, alignItems: 'center' }}>
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <CheckBoxOutlinedIcon sx={{ mr: 1 }} />
        {!inputStatus ?
            <Typography> {checkList.title}</Typography>
            : (
                <TextField
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 4,
                        width: '300px',

                    }}
                    size="small"
                    required
                    defaultValue={checkListNameEdit}
                    onChange={(e) => setCheckListNameEdit(e.target.value)}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position='end'>
                                <DoneIcon
                                    onClick={() => handleCheckListNameEdit(`${checkList.id}`)} />

                            </InputAdornment>
                    }}
                />
 
            )}

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
    <MenuItem id={checkList.id} onClick={(e) => handleDeleteCheckList(e.target.id)}><DeleteOutlineIcon sx={{ mr: 1 }} />Remove List</MenuItem>
    <MenuItem onClick={() => handleRenameCheckList()} ><EditOutlinedIcon sx={{ mr: 1 }} />Rename List</MenuItem>

</Menu>
</Box>
</Box>

  )
}

export default CheckListTitle