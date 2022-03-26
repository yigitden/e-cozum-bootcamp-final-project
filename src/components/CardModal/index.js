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
import { useAppDispatch } from '../../store';
import { getAllCard } from '../../features/CardSlice';
import Comment from '../Comment';
import Activity from '../Comment/Activity';
 


const CardModal = ({ card,list }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height:650,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
        overflow: 'auto',
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);  
    const handleClose = () => setOpen(false);
  
 
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
                        handleClose={handleClose}
                        cardId={card.id}/> 
                        <CardName
                        list={list} 
                     listId={card.listId} 

                        />
                  
                        <Box
                        sx={{
                            height:130,
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between'

                        }}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Card Title"
                            defaultValue={card.title}
                        />

                        <TextField 
                        sx={{my:2}}
                            fullWidth
                            multiline
                            rows={4}
                            id="Description"
                            label="Description"
                            defaultValue={card.description}
 
                         />   
                         

</Box>


{(!card.labels) ? <></> :   <Labels labels={card.labels}/>}

{(!card.checklists) ? <></> :   <CheckList check={card.checklists}/>}   

<Comment  
cardId={card.id}/>

{(!card.comments) ? <></> :   <Activity comments={card.comments}/>}


                    </Box>
                </Modal>
            </div>










        </>





    )
}

export default CardModal