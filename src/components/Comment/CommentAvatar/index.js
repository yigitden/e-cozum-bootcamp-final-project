import React from 'react'
import { getCookie } from '../../../service/Api'
import { blue } from '@mui/material/colors';
import { Avatar } from '@mui/material'


const CommentAvatar = () => {

    const username = getCookie("username")

  return (

    <Avatar
    sx={{ bgcolor: blue[400], mr:3 }}
    alt={username}
    src="/broken-image.jpg"
/>
  )
}

export default CommentAvatar