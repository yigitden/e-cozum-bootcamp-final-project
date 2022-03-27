import { Box,TextField, Typography,Chip  } from '@mui/material'
import React from 'react'
import Label from '../../Label'
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { grey } from '@mui/material/colors';




const Labels = ({labels}) => {

  
  return (
    <Box sx={{p:3}} >
       <Box sx={{
           display:'flex',mt:9}}>
               <LabelOutlinedIcon/> 
               <Typography>Labels</Typography>
               </Box> 

               <Box sx={{display:'flex', border:1,borderRadius:1,p:1,borderColor:grey[500]}}> 
  {labels && labels.map((label) =>(
<Box key={label.id}>
    <Label
    text={label.title}  
    
    /></Box>
  ))}
                 
                  </Box> 
    </Box>
  )
}

export default Labels