
import { Box} from '@mui/material';
import React from 'react'
import { grey } from '@mui/material/colors';
import RemoveCard from '../../RemoveCard';
import AddCheckList from '../../AddCheckList';
import AddLabel from '../../AddLabel';
import CloseIcon from '@mui/icons-material/Close';
import SelectDueDate from '../DueDate/SelectDueDate'; 

const Header = ({ handleClose, cardId,card }) => {
  return (
    <>

      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '5px',
        backgroundColor: grey[800],
        p: 3, 
      }}>
        <SelectDueDate card={card} />

        <AddLabel
          cardId={cardId} />
        <AddCheckList
          cardId={cardId} />
        <RemoveCard
          cardId={cardId}
          closeModal={handleClose}
        />
        <Box sx={{ width: '100%' }}>
        <CloseIcon sx={{
          color: 'white',
          cursor: 'pointer',
          ml:70 
        }}
          onClick={() => handleClose()} />
        </Box>


      </Box>
    </>


  )
}

export default Header