import { Box } from "@mui/material"
import AddBoard from "../AddBoard"
import BoardButton from "../BoardButton"
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../store"
import { fetchBoard } from "../../features/boardSlice"
import { Link } from "react-router-dom"

const BoardList = () => {
  const boardArray  = useAppSelector(state => state.board.boards)
  const dispatch = useAppDispatch()
 
  
  useEffect(() => {
    dispatch(fetchBoard())
  }, [dispatch])
 

  return (


    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      {boardArray && boardArray.map((board) => (

        <Link to={`/board/${board.id}`} >

          <BoardButton

            boardName={board.title}
            id={board.id} />
        </Link>
      ))}

      <AddBoard />

    </Box>

  )
}

export default BoardList 