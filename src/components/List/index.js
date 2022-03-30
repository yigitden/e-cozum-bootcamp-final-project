import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { grey } from "@mui/material/colors";
import CardItem from "../CardItem";
import ListTitle from "../ListTitle";
import { useAppSelector, useAppDispatch } from "../../store";
import { getListAll } from "../../features/ListSlice";
import { useParams } from "react-router-dom";
import { Droppable } from "react-beautiful-dnd";
import { Box } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
const List = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListAll(id));
  }, [dispatch]);

  const allList = useAppSelector((state) => state.list.data);
  const onEnd = (result) => {
    console.log(result);
  };

  return (
    <>
      <DragDropContext onDragEnd={onEnd}>
        <Droppable droppableId="1234567">
          {(provided, snapshot) => (
            <Box sx={{ display: "flex" }} ref={provided.innerRef}>
              {allList &&
                allList.map((list) => (
                  <Paper
                    sx={{
                      width: 320,
                      height: 460,
                      backgroundColor: grey[100],
                      borderRadius: 6,
                      mr: 3,
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "nowrap",
                    }}
                  >
                    <Box>
                      <ListTitle listTitle={list.title} listId={list.id} />

                      <CardItem
                        listId={list.id}
                        listTitle={list.title}
                        list={list}
                      />
                    </Box>
                  </Paper>
                ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default List;
