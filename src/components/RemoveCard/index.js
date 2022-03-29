import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 
import { useAppDispatch } from '../../store';
import { useParams } from 'react-router-dom';
import { deleteCard, getAllCard } from '../../features/CardSlice';


const RemoveCard = ({cardId, closeModal}) => {
    

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useAppDispatch()

    
    const handleDeleteCard = () => {
         dispatch(deleteCard(cardId))
         dispatch(getAllCard())
        closeModal()
    }

    return (
        <>
            <MoreHorizIcon
                sx={{ 
                cursor: 'pointer',
                color:'white'
              }}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleDeleteCard()}>Remove Card</MenuItem>
            </Menu>
        </>



    )
}

export default RemoveCard