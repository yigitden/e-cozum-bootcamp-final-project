import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Checkbox, TextField } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
 


const ChecklistItem = () => {
  return (
<>

<Box sx={{display:'flex', justifyContent:'center', alignItems:'center', my:2}}>
<Checkbox />   <TextField fullWidth id="outlined-basic" label="Add an item" variant="outlined"  />  <DeleteOutlineOutlinedIcon/>


</Box>



<Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>


<TextField fullWidth id="outlined-basic" label="Add an item" variant="outlined"  />
<AddCircleIcon sx={{ }} fontSize="large" />
</Box>


</>




  )
}

export default ChecklistItem