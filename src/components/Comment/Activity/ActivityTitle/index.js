import React from 'react'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { Box, Typography } from '@mui/material';
const ActivityTitle = () => {
  return (
    <Box sx={{display:'flex', mt:2,mb:3}}>
        <FormatListBulletedOutlinedIcon sx={{mr:1}}/><Typography  sx={{fontWeight: 500}}>Activity</Typography>
    </Box>
  )
}

export default ActivityTitle