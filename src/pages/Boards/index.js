import { Typography } from '@mui/material'
import { useEffect } from 'react'
import BoardList from '../../components/BoardList'
import ProfileAvatar from '../../components/ProfileAvatar'
import { fetchBoard } from '../../features/boardSlice'
import { useAppDispatch } from '../../store'

 
 

const Boards = ({handleSetIsLogged}) => {

  
  return (
    <>
    <ProfileAvatar handleSetIsLogged={handleSetIsLogged}/>
  
    <Typography sx={{
      my:10,
      fontWeight: 'medium' 
      }}
      variant='h3' align='center' >Scrumboard App</Typography>

    <BoardList/>



    </>
  )
}

export default Boards