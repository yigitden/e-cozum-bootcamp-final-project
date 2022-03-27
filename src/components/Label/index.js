import * as React from 'react';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';
 


const Label = ({text,id,onDelete}) => {
 
  return (
    <Box key={id}>    
   <Chip sx={{mr:1,fontWeight:500 }}
  label={text}  
  color={text == 'Önemli' ? 'error' : 'default'}
/>
</Box> 
  )
}

export default Label