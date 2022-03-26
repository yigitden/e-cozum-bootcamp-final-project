 
import { Box, Menu, Button, TextField, MenuItem } from '@mui/material';
import React from 'react' 

import { grey } from '@mui/material/colors';
import RemoveCard from '../../RemoveCard';
import AddCheckList from '../../AddCheckList';
import AddLabel from '../../AddLabel';
import CloseIcon from '@mui/icons-material/Close';


const Header = ({handleClose,cardId}) => {
  return (
    <>

    <Box sx={{
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      height:'5px',
      backgroundColor: grey[800],
      p:3
    }}>


      <AddLabel
      cardId={cardId}/>
      <AddCheckList
      cardId={cardId}/>
      <RemoveCard
      cardId={cardId}
      closeModal={handleClose}
        />
     
       <CloseIcon sx={{  
                    color:'white',  
                    cursor:'pointer'
             }}
             onClick={() => handleClose()} />
    
    </Box>
 </>

    
  )
}

export default Header