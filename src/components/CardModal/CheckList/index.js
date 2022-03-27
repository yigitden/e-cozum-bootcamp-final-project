
import { Box } from '@mui/material';
import React from 'react'
import ChecklistItem from './ChecklistItem';
import CheckListTitle from './CheckListTitle'

const CheckList = ({ check }) => {


    return (

        <Box sx={{ p: 3 }}>
            {check && check.map((item) => (
                <>
                    <CheckListTitle checkList={item} />
                    <ChecklistItem checklist={item} />
                </>
            ))}


        </Box>

    )
}

export default CheckList

