import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import { grey,red } from '@mui/material/colors';
import AddBoxIcon from '@mui/icons-material/AddBox'; 
import {useState } from 'react';
import { Api } from '../../service/Api';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonRadius from '../ButtonRadius';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { addLists } from '../../features/ListSlice';
 
 

const AddList = () => { 
  const { id } = useParams()
  const [addList, setAddList] = useState(false);
  const [listName,setListName] = useState('');
  const dispatch = useAppDispatch()

 

  const commonStyles = {
    bgcolor: grey[100],
    border: 0,
    width: '320px',
    p:1.5,
    borderRadius: '20px',
    boxShadow: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.5s',
    '&:hover': {
      backgroundColor: grey[200],
      cursor: 'pointer'

    }
  };
  const newListName = { 
    'title': `${listName}`,
    'boardId': Number(id)
  }
  const handleAddList = () => {
     
      dispatch(addLists(newListName))

      setAddList(false)
  }


  return (

    <Box sx={{ ...commonStyles }} >

      {(!addList) ? (

        <Box 
        onClick={() => setAddList(true)} 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }} >
          <AddBoxIcon sx={{ color: red[500], fontSize: 30, mr: 1 }} />
          <Typography  >Add a new list</Typography>
        </Box>

                    )
        :  (
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-end',justifyContent:'space-around'}}>
          <TextField
          fullWidth
            required
            label="List Title"
            id="outlined-required"
            defaultValue=""
            size="small"
            onChange={(e)=>setListName(e.target.value)}
            InputProps={{
              endAdornment:
                <InputAdornment position='end'>
                  <ClearIcon
                    onClick={() => setAddList(false)} />

                </InputAdornment>
            }}
          />
          
          <ButtonRadius 
          func= {handleAddList}
          text='Add'/>
          </Box>
        )




      }
    </Box>






  )
}

export default AddList