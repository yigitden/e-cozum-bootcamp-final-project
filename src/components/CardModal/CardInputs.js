import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { getAllCard, updateCard } from '../../features/CardSlice';
import { useAppDispatch } from '../../store';

const CardInputs = ({card}) => {
    const dispatch = useAppDispatch()
    const [cardTitle,setCardTitle] = useState(`${card.title}`)
    const [cardDescription,setCardDescription] = useState(`${card.description}`)

    const cardUpdateObject = {
        
        "title": cardTitle,
        "description": cardDescription
        
    }
    const cardId = card.id

const handleChange = () => {
    dispatch(updateCard({
        cardUpdateObject,
        cardId
    }))
    dispatch(getAllCard())
}
     
  
    
  return (
    <Box
    sx={{
        
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'

    }}>
    <TextField
        fullWidth
        required
        id="outlined-required"
        label="Card Title"
        defaultValue={cardTitle}
        onChange={(event) => setCardTitle(event.target.value)}
        onKeyUp={()=>{
            setTimeout(()=>{
                handleChange();
            },2.0*1000)
        }}
    />

    <TextField
        sx={{ mt: 2 }}
        fullWidth
        multiline
        rows={4}
        id="Description"
        label="Description"
        defaultValue={cardDescription === 'undefined' || null ? '' : cardDescription }
        onChange={(event) => setCardDescription(event.target.value)}
        onKeyUp={()=>{
            setTimeout(()=>{
                handleChange();
            },2.0*1000)
        }}

    />


</Box>

  )
}

export default CardInputs