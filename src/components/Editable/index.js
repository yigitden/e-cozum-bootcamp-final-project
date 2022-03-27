import React from 'react'
import { Typography, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { useAppDispatch, useAppSelector } from "../../store"
import { useParams } from 'react-router-dom'
import { editBoard, fetchBoard } from '../../features/boardSlice';

const Editable = () => {

    const { id } = useParams()
    const dispatch = useAppDispatch()
    const boardDetails = useAppSelector(state => state.board.boards).filter((item) => item.id == id)

    const [editName, setEditName] = useState(false);
    const [listName, setListName] = useState(`${boardDetails[0].title}`);

    const handleEditBoardName = () => {
        const sendNewName = { title: `${listName}` }
        dispatch(editBoard({
            id,
            sendNewName
        }))
        setEditName(false)
    }




    return (
        <>
            {(!editName) ? (

                <Typography sx={{ color: 'white', fontSize: '20px', cursor: 'pointer' }} variant="h3" onClick={() => setEditName(true)}>
                    {listName}
                </Typography>

            ) : (


                <TextField
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 4,
                        width: '300px',

                    }}
                    required
                    defaultValue={listName}
                    onChange={(e) => setListName(e.target.value)}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position='end'>
                                <DoneIcon onClick={() => handleEditBoardName()} />

                            </InputAdornment>
                    }}
                />
 
            )

            }

        </>
    )
}
export default Editable