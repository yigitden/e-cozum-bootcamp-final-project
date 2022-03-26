import React from 'react'
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import ChipLink from '../Chip';
import Editable from '../Editable';
import MenuIcon from '../MenuIcon';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 55,
                p:3,
                backgroundColor: grey[800],
            }}
        >

            <Link to="/">
            <ChipLink
                text='Boards'
                />
</Link>
                <Editable
                />
                <MenuIcon
                />


        </Box>



    )
}

export default MainMenu


