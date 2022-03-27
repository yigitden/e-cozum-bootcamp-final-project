
import { Box } from '@mui/material'
import React from 'react'
import CommentAvatar from './CommentAvatar'
import CommentInput from './CommentInput'
import CommentTitle from './CommentTitle'

const Comment = ({ cardId }) => {
    return (
        <Box sx={{ mt: 3, p: 3 }}>
            <Box >
                <CommentTitle />
            </Box>
            <Box sx={{ display: 'flex' }}>
                <CommentAvatar />
                <CommentInput cardId={cardId} />




            </Box>

        </Box>
    )
}

export default Comment