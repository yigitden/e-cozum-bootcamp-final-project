import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import ButtonRadius from '../ButtonRadius' 
import { useAppDispatch, useAppSelector } from "../../store"  
import { useParams } from 'react-router-dom'; 

const AddMember = () => {

  

  return (
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'space.between'}}>

        <TextField required
         id="outlined-required" 
        label="Please type an username" 
        variant="outlined"  
        defaultValue=""
         />
    <ButtonRadius
    text="Add" 
    />
    </Box>
  )
}

export default AddMember