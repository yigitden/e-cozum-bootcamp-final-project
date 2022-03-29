import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material'
import React from 'react' 
import { deleteCheckListItem, getAllCard } from '../../../../features/CardSlice';
import { Api } from '../../../../service/Api';
import { useAppDispatch } from '../../../../store';

const ChecklistItemDelete = ({id}) => {
    const dispatch = useAppDispatch()
 

    const handleDeleteChecklistItem = () => {
     Api 
     .delete(`checklist-item/${id}`) 
     .then(()=>dispatch(getAllCard()))
     
    
    }



  return (

    <Button onClick={() => handleDeleteChecklistItem()}>   <DeleteOutlineOutlinedIcon  />  </Button>
  
   
  )
}

export default ChecklistItemDelete