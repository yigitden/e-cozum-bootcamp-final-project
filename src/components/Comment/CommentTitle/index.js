import React from 'react'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { Box, Typography } from '@mui/material';
const CommentTitle = () => {
    return (
        <Box sx={{mb:3, display:'flex'}}>
            <CommentOutlinedIcon sx={{mr:1}}/> <Typography sx={{fontWeight: 500}}> Comment</Typography>
        </Box>
    )
}

export default CommentTitle