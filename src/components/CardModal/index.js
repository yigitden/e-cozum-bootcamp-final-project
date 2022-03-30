import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Header from "./Header";
import CardInputs from "./CardInputs";
import CardName from "./CardName";
import { TextField } from "@mui/material";
import Labels from "./Labels";
import CheckList from "./CheckList";
import Comment from "../Comment";
import Activity from "../Comment/Activity";
import { getAllCard, updateCard } from "../../features/CardSlice";
import { useAppDispatch } from "../../store";
import DueDate from "./DueDate";

const CardModal = ({ card, list }) => {
  const dispatch = useAppDispatch();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 650,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    overflow: "auto",
    borderRadius: 6,
    "&:-webkit-scrollbar": {
      width: 5,
      borderRadius: 8,
      backgroundColor: "black",
    },
    "&:-webkit-scrollbar-thumb": {
      borderRadius: 8,
      backgroundColor: "black",
    },
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    dispatch(getAllCard());
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>sadas</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header card={card} handleClose={handleClose} cardId={card.id} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <CardName list={list} listId={card.listId} />
            </Box>
            <Box>
              {card.duedate && card.duedate !== null ? (
                <DueDate card={card} />
              ) : (
                <></>
              )}
            </Box>
          </Box>
          <CardInputs card={card} />

          {card.labels && card.labels.length !== 0 ? (
            <Labels card={card} />
          ) : (
            <></>
          )}

          {!card.checklists ? <></> : <CheckList check={card.checklists} />}

          <Comment cardId={card.id} />

          {card.comments && card.comments.length !== 0 ? (
            <Activity comments={card.comments} />
          ) : (
            <></>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default CardModal;
