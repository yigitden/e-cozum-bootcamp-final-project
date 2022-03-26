import { Box,Avatar } from '@mui/material'
import React from 'react'
import { grey,blue} from '@mui/material/colors'

const ActivityComment = ({ comments }) => {


  return (
    <>
      {comments && comments.map((comment) => (


<Box sx={{
  display:'flex',
  mb:2
}}> 
<Box>   <Avatar
sx={{ bgcolor: blue[400], mr:3 }}
alt={comment.author.username}
src="/broken-image.jpg" />
  </Box>
        <Box sx={{
          border: 1,
          borderColor: grey[300],
          borderRadius: 3,
          whiteSpace: 'normal',
          display: 'flex',
          alignItems: 'center',
          p: 2,
          width:'100%'

        }}>
          {comment.message}
        </Box>

        </Box>

      ))}
    </>







  )
}

export default ActivityComment






