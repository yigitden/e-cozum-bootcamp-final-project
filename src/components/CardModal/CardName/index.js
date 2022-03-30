import { Typography,Box } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const CardName = ({list}) => {

  
  return (
    <Box sx={{display:'flex',p:3}}>
    <Typography  >  {list.board.title}</Typography>
    <NavigateNextIcon/>
    <Typography>   {list.title}  </Typography>
    </Box>
    
  )
}

export default CardName