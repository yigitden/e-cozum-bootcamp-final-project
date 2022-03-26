import React from 'react'
import {Chip,Stack} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { grey } from '@mui/material/colors';

const ChipLink = ({text,link}) => {
  return (
     
    
     <Chip
     sx={{p:1,fontSize:15, backgroundColor:grey[600]}}
        icon={<DashboardIcon fontSize="small"/>}
        label={text}
        component="a"
        href={link}
        color="primary"
        size='medium'
        clickable
      /> 
    
  )
}

export default ChipLink