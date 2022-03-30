import { Box } from "@mui/material";
import React from "react";
import List from "../List";
import AddListButton from "../AddListButton";
import { DragDropContext } from "react-beautiful-dnd";

const AllList = () => {
  return (
    <Box
      sx={{
        my: 4,
        p: 2,
        display: "flex",
        alignItems: "flex-start",
        whiteSpace: "nowrap",
      }}
    >
      <List />
      <AddListButton />
    </Box>
  );
};

export default AllList;
