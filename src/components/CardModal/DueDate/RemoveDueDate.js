import { MenuItem } from '@mui/material'
import React from 'react' 
import { deleteDueDate } from '../../../features/CardSlice'
import { useAppDispatch } from '../../../store'

const RemoveDueDate = ({handleClose,card}) => {

    const dispatch = useAppDispatch() 
    const cardId = card.id
    const handleDeleteDuedate = () => {
        const removedDueDate = {
            "duedate": null
          } 
          
          dispatch(deleteDueDate({
            removedDueDate,
            cardId
          }))
        handleClose()
    }



  return (
    <>
    
    <MenuItem onClick={() => handleDeleteDuedate()}>Remove Due Date</MenuItem>
    
    </>
  )
}

export default RemoveDueDate