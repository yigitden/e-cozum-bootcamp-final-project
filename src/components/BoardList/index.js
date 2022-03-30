import { Box } from "@mui/material";
import AddBoard from "../AddBoard";
import BoardButton from "../BoardButton";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { allBoardLists } from "../../features/boardSlice";
import { Link } from "react-router-dom";

const BoardList = () => {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(allBoardLists())
  },[dispatch])

  const boardArray = useAppSelector((state) => state.board.board);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {boardArray &&
        boardArray.map((board) => (
          <Link to={`/board/${board.id}`}>
            <Box key={board.id}>
              <BoardButton boardName={board.title} id={board.id} />
            </Box>
          </Link>
        ))}

      <AddBoard />
    </Box>
  );
};

export default BoardList;
