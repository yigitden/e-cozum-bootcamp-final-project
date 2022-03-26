import * as React from 'react';
import Chip from '@mui/material/Chip';
 


const Label = ({text,color,onDelete}) => {

  
console.log(color)
  return (
    <div>
      <Chip sx={{mr:1,fontWeight:500 }}
  label={text} 
 
  color={text == 'Önemli' ? 'error' : 'default'}
/>
    </div>
  )
}

export default Label