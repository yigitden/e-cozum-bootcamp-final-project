import React from 'react'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { Typography } from '@mui/material';

const CardItemComment = ({commentCount}) => {
  return (
      <>  
      <CommentOutlinedIcon sx={{fontSize:'medium',pr:1}} />
      <Typography sx={{ fontSize: 14, fontWeight:'medium', pr:2}} component="div">
      {commentCount}
      </Typography>
      </>
  
  )
}

export default CardItemComment