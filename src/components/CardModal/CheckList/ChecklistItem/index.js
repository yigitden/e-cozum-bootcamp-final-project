import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Checkbox, TextField } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useAppDispatch } from '../../../../store';
import { addChecklistItems, getAllCard } from '../../../../features/CardSlice';
 


const ChecklistItem = ({checklist}) => {

  const [itemName, setItemName] = useState('') 

  const dispatch = useAppDispatch()
  const handleCheckListItemAdd = () => {

    const newCheckListItem = {
      "checklistId":checklist.id,
      "title":`${itemName}`,
      "isChecked":false
    }

    dispatch(addChecklistItems(newCheckListItem))
    dispatch(getAllCard())

    setItemName('')
  }

  return (
    <>
 {checklist.items && checklist.items.map((item)=>(
 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
 <Checkbox />   
 <TextField fullWidth id="outlined-basic"  variant="outlined" value={item.title} /> 
  {item.length}
  <Button><DeleteOutlineOutlinedIcon /></Button>


</Box>


 ))}
     

      <Box sx={{ pl:5,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


        <TextField fullWidth id="outlined-basic" label="Add an item"
          variant="outlined"
          onChange={(event) => setItemName(event.target.value)}
          value={itemName} />


      <Button>  <AddCircleIcon sx={{}} fontSize="large" onClick={() => handleCheckListItemAdd()} /></Button>
      </Box>


    </>




  )
}

export default ChecklistItem