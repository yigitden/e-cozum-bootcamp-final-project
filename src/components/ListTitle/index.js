import React, { useEffect } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { grey } from '@mui/material/colors';
import { useState } from 'react'; 
import { useAppDispatch} from '../../store';
import { useParams } from 'react-router-dom';
import { deleteLists, getListAll } from '../../features/ListSlice';
import { Typography, Box, TextField, InputAdornment } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { Api } from '../../service/Api';
 
const ListTitle = ({ listTitle, listId }) => {
  const { id } = useParams()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [statusTitle, setStatusTitle] = useState(false)

  const [listNameEdit, setListNameEdit] = useState(`${listTitle}`);

  const handleRename = () => {
    handleClose()
    setStatusTitle(true)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
  const dispatch = useAppDispatch()
 
 
  const handleEditList = () => {

    const updatedListInfo = {
      "title": `${listNameEdit}`,
      "boardId": Number(id)
    } 
    Api.put(`list/${listId}`,updatedListInfo)
    .then()
    dispatch(getListAll(id))
    handleClose()
    setStatusTitle(false)
  }


  const handleRemoveList = (listId) => {
    dispatch(deleteLists(listId))
    handleClose()
  }



  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: 2
    }}>

      {(!statusTitle) ? (<Typography sx={{
        fontSize: 16,
        fontWeight: 500,
        ml: 2
      }}>


        {listTitle}


      </Typography>) : (
        <TextField
          sx={{
            backgroundColor: 'white',
            borderRadius: 4,
            width: '300px',

          }}
          size="small"
          required
          defaultValue={listTitle}
          onChange={(e) => setListNameEdit(e.target.value)}
          InputProps={{
            endAdornment:
              <InputAdornment position='end'>
                <DoneIcon
                  onClick={() => handleEditList()} />

              </InputAdornment>
          }}
        />
      )}

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
        <MenuItem onClick={() => handleRemoveList(listId)}><DeleteOutlineIcon sx={{ mr: 1 }} />Remove List</MenuItem>
        <MenuItem onClick={() => handleRename()}><EditOutlinedIcon sx={{ mr: 1 }} />Rename List</MenuItem>

      </Menu>

    </Box>
  )
}

export default ListTitle