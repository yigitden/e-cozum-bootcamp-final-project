import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import ButtonRadius from '../ButtonRadius'
import { addMember } from '../../features/BoardIdSlice';
import { useAppDispatch, useAppSelector } from "../../store" 
import { Api } from '../../service/Api';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AddMember = () => {

  const [memberName,setMemberName] = useState('')
  const { id } = useParams()
  const dispatch = useAppDispatch()

const handleAddMember = () => {
  
  const newMember = {
    "username": `${memberName}`,
    "boardId": Number(id)
  }
  console.log(newMember)

  Api
    .post('board-member', newMember)
    .then(dispatch(addMember(newMember)))

  

}


  return (
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'space.between'}}>

        <TextField required
         id="outlined-required" 
        label="Please type an username" 
        variant="outlined"  
        defaultValue=""
        onChange={(e)=>setMemberName(e.target.value)}/>
    <ButtonRadius
    text="Add"
    func={handleAddMember}
    />
    </Box>
  )
}

export default AddMember