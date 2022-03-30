import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useAppDispatch } from '../../../../store';
import { addChecklistItems, editCheckListItemName, getAllCard } from '../../../../features/CardSlice';
import LinearProgress from '@mui/material/LinearProgress';
import CheckBoxItem from './CheckBoxItem';
import ChecklistItemDelete from './ChecklistItemDelete';
import { Api } from '../../../../service/Api';
 


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

  
const handleCheckListItemEdit = (value,id) => {

  const checkListItemEdit = {
    "title": value, 
  } 
  
  Api
     .put(`checklist-item/${id}`,checkListItemEdit)
     .then(() => dispatch(getAllCard())) 
     .catch(err => console.log(err))
}


 
const totalChecklistItem = () => {
  let count = 0
  checklist.items.forEach((item) => {
    if(item.isChecked === true) {
      count +=1
    }
  });
  return count
}
 
  
  return (
    <>

<Box sx={{ my:2,display:'flex',alignItems:'center',justifyContent:'flex-start' }}>
     <Box><Typography>   {totalChecklistItem()}/{checklist.items.length} </Typography></Box> 
     <Box> <LinearProgress fullWidth sx={{width:625,ml:2}} variant="determinate" 
     value={totalChecklistItem() === 0 && checklist.items.length===0 ? 0 : (totalChecklistItem() / checklist.items.length) * 100} />
     </Box> 
    </Box>

 {checklist.items && checklist.items.map((item)=>(
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
 <CheckBoxItem 
 id={item.id}
 isChecked={item.isChecked}
 totalChecklistItem={totalChecklistItem}
 />
 <TextField 
 fullWidth id="outlined-basic" 
  variant="outlined" 
  defaultValue={item.title} 
  onChange={(event) => handleCheckListItemEdit(event.currentTarget.value,item.id)}/> 
 


<ChecklistItemDelete    id={item.id}  />
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