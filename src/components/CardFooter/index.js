import React, { useEffect } from 'react'
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography, TextField,InputAdornment } from '@mui/material';
import { useState } from 'react';
import ButtonRadius from '../ButtonRadius'; 
import { useAppDispatch } from '../../store';
import {  getListAll  } from '../../features/ListSlice';
import { useParams } from 'react-router-dom';
import { addCard } from '../../features/CardSlice'; 

import ClearIcon from '@mui/icons-material/Clear';

const CardFooter = ({listId}) => {
    const { id } = useParams()
    const [name, setName] = useState('');
    const [statusButton, setStatusButton] = useState(false);
    const dispatch = useAppDispatch()

useEffect(()=>{
    dispatch(getListAll(id))
},[dispatch])

    const handleAddCard = () => {
        const newCard = {
            "title":`${name}`,
            "listId": listId
        }
  
    dispatch(addCard(newCard))
     setStatusButton(false)
    }



    return (
        <>

            <Divider />
                <Box 
               >

                {(! statusButton) ?
                   ( 
                   <>
                        <Box  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    p: 1,
                    cursor: 'pointer'
                }} onClick={() =>  setStatusButton(true)}>
                        <AddIcon sx={{ mr: 1 }} />  <Typography sx={{ fontWeight: 'medium' }}>Add a card</Typography>
                        </Box>
              

                    </>
                    )
                    :(
                    <Box sx={{
                        
                        mx:'auto',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        p:1
                    }}>
                    <TextField
                        size="small"
                    sx={{mr:1}}
                        fullWidth
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue=""
                        onChange={(event) => setName(event.target.value)}
                        InputProps={{
                            endAdornment:
                              <InputAdornment position='end'>
                                <ClearIcon
                                  onClick={() => setStatusButton(false)} />
              
                              </InputAdornment>
                          }}
                    />
                    <ButtonRadius 
                    text='ADD'
                    func={handleAddCard}
                    
                    />
                    </Box>
                    )



            }





</Box>




            </>


            )
}

export default CardFooter