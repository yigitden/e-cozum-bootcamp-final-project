import { Box, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { grey } from '@mui/material/colors'; 
import { useAppDispatch } from '../../store';

import { addBoard } from '../../features/boardSlice'; 


const AddBoard = () => {
  const dispatch = useAppDispatch()
  const newBoardObject = { title: 'Untitled  Board'}

  const handleAddBoard = () => {
    dispatch(addBoard(newBoardObject))
  }


  return (

    <Box sx={{
      borderRadius: 4,
      boxShadow: 2,
      width: '192px',
      height: '192px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: grey[100],
      transition: '0.5s',
      '&:hover': {
        cursor: 'pointer',
        boxShadow: 6,

      }
    }}
      onClick={() => handleAddBoard()}>
      <AddCircleIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
      <Typography sx={{ fontWeight: 'medium' }}>Add new board</Typography>
    </Box>
  )
}

export default AddBoard