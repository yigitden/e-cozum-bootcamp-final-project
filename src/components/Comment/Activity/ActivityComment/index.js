import { Box,Avatar, Typography } from '@mui/material'
import React from 'react'
import { grey,blue} from '@mui/material/colors'

const ActivityComment = ({ comments }) => {


  return (
    <>
      {comments && comments.map((comment) => (


<Box sx={{
  display:'flex',
  mb:2
}} key={comment.id}> 
<Box sx={{
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  justifyContent:'center',
  mr:3 
}}>  
   <Avatar
sx={{ bgcolor: blue[400]}}
alt={comment.author.username}
src="/broken-image.jpg" />
<Typography>{comment.author.username}</Typography>
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
         <Typography>{comment.message}</Typography> 
        </Box>

        </Box>

      ))}
    </>







  )
}

export default ActivityComment






