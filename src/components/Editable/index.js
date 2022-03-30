import React from "react";
import {
  Typography,
  TextField,
  InputAdornment,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useAppDispatch, useAppSelector } from "../../store";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteBoard,
  editBoard,
  allBoardLists,
} from "../../features/boardSlice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { grey } from "@mui/material/colors";

const Editable = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const boardDetails = useAppSelector((state) => state.board.boards).filter(
    (item) => item.id == id
  );

  const [editName, setEditName] = useState(false);
  const [enteredBoardName, setEnteredBoardName] = useState(
    `${boardDetails[0].title}`
  );

  const handleEditBoardName = () => {
    const sendNewName = { title: `${enteredBoardName}` };
    dispatch(
      editBoard({
        id,
        sendNewName,
      })
    );
    setEditName(false);
  };

  return (
    <>
      {!editName ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "20px", cursor: "pointer", mr: 1 }}
            variant="h3"
            onClick={() => setEditName(true)}
          >
            {enteredBoardName}
          </Typography>
        </Box>
      ) : (
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: 4,
            width: "300px",
          }}
          required
          defaultValue={enteredBoardName}
          onChange={(e) => setEnteredBoardName(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <DoneIcon onClick={() => handleEditBoardName()} />
              </InputAdornment>
            ),
          }}
        />
      )}
    </>
  );
};
export default Editable;
