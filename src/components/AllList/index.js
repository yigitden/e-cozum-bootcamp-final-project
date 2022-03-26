import { Box } from '@mui/material'
import React from 'react'
import List from '../List'
import AddListButton from '../AddListButton'

const AllList = () => {
  return (
    <Box
    sx={{
        my:4,
        p:2,
        display:'flex', 
        alignItems:'flex-start'
    }}>
        <List/>
        <AddListButton/>
    </Box>
  )
}

export default AllList