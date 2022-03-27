import { Box } from '@mui/material'
import React from 'react'
import ActivityComment from './ActivityComment'
import ActivityTitle from './ActivityTitle'

const Activity = ({comments}) => {
  return (
    <Box sx={{p:3}}>
    <ActivityTitle/>
    <ActivityComment comments={comments}/>
    
    </Box>

  )
}

export default Activity