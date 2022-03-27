import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Header from './Header';
import DueDate from './DueDate';
import CardName from './CardName';
import { TextField } from '@mui/material';
import Labels from './Labels';
import CheckList from './CheckList';
import Comment from '../Comment';
import Activity from '../Comment/Activity';
import { getAllCard } from '../../features/CardSlice';
import { useAppDispatch } from '../../store';


const CardModal = ({ card, list }) => {
    const dispatch = useAppDispatch()
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 650,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        overflow: 'auto',
        borderRadius:6
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        dispatch(getAllCard())
    }

    return (
        <>
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                         
                            <Header
                                card={card}
                                handleClose={handleClose}
                                cardId={card.id} />
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box>

                                    <CardName
                                        list={list}
                                        listId={card.listId}

                                    />
                                </Box>
                                <Box >
                                    <DueDate card={card} />
                                </Box>




                            </Box>
                            <Box
                                sx={{
                                    height: 130,
                                    p: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'

                                }}>
                                <TextField
                                    fullWidth
                                    required
                                    id="outlined-required"
                                    label="Card Title"
                                    defaultValue={card.title}
                                />

                                <TextField
                                    sx={{ my: 2 }}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="Description"
                                    label="Description"
                                    defaultValue={card.description}

                                />



                            </Box>


                            {(!card.labels) ? <></> : <Labels labels={card.labels} />}

                            {(!card.checklists) ? <></> : <CheckList check={card.checklists} />}

                            <Comment
                                cardId={card.id} />

                            {(!card.comments) ? <></> : <Activity comments={card.comments} />}
 
                    </Box>
                </Modal>
            </div>










        </>





    )
}

export default CardModal