
import { Box } from '@mui/material'
import React from 'react'
import CommentAvatar from './CommentAvatar'
import CommentInput from './CommentInput'
import CommentTitle from './CommentTitle'

const Comment = ({cardId}) => {
    return (
        <>
    <Box sx={{mt:13}}>
            <CommentTitle />
         </Box>
            <Box sx={{display:'flex'}}>
            <CommentAvatar />
            <CommentInput cardId={cardId}/>




        </Box>
        </>

    )
}

export default Comment