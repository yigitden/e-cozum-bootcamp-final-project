import { TextField, Box } from "@mui/material";
import React, { useState } from "react";
import { addComments, getAllCard } from "../../../features/CardSlice";
import { useAppDispatch } from "../../../store";
import ButtonRadius from "../../ButtonRadius";

const CommentInput = ({ cardId }) => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleAddComment = () => {
    if (inputValue == "") {
      alert("You can not send empty comment");
    } else {
      const commentData = {
        cardId: cardId,
        message: `${inputValue}`,
      };
      dispatch(addComments(commentData));
      dispatch(getAllCard());
      setInputValue("");
    }
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <TextField
        id="outlined-basic"
        onChange={(event) => setInputValue(event.target.value)}
        label="Add comment"
        variant="outlined"
        value={inputValue}
      />

      <Box>
        <ButtonRadius text="Add" func={handleAddComment} />
      </Box>
    </Box>
  );
};

export default CommentInput;
