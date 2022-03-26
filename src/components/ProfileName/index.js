import React from 'react'
import { Typography } from '@mui/material'
 


const ProfileName = ({username}) => {

 
  return (
    <Typography sx={{fontWeight: 'bold',fontSize: 'default'}}>{username}</Typography>
  )
}

export default ProfileName