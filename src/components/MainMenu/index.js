import React from 'react'
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import ChipLink from '../Chip';
import Editable from '../Editable';

import { Link } from 'react-router-dom';
import DrawerMenu from '../DrawerMenu';

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
            <DrawerMenu />


        </Box>



    )
}

export default MainMenu


