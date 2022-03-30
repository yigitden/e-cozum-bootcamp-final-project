import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import React, { useEffect, useState } from "react";
import {
  Box,
  Menu,
  Button,
  TextField,
  MenuItem,
  FormControlLabel,
} from "@mui/material";

import Checkbox from "@mui/material/Checkbox";
import Api from "../../service/Api";

import { useAppDispatch } from "../../store";
import { addLabel, getAllCard } from "../../features/CardSlice";

const AddLabel = ({ cardId }) => {
  const [checkhedStatus, setCheckedStatus] = useState(false);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [labelList, setLabelList] = useState([]);

  const getAllLabel = () => {
    Api()
      .get("label")
      .then((data) => setLabelList(data.data));
  };

  useEffect(() => {
    getAllLabel();
  }, []);

  const handleLabelChange = (event) => {
    {
      event.target.checked == true
        ? handleLabelAdd(event.target.id)
        : handleLabelDelete(event.target.id);
    }
  };

  const handleLabelAdd = (id) => {
    const newLabel = {
      cardId: Number(cardId),
      labelId: Number(id),
    };

    dispatch(addLabel(newLabel));
    dispatch(getAllCard());
    setCheckedStatus(true);
  };

  const handleLabelDelete = (id) => {
    Api()
      .delete(`card-label/${id}`)
      .then(() => dispatch(getAllCard()))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <LabelOutlinedIcon
        sx={{
          cursor: "pointer",
          color: "white",
          mr: 2,
        }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {labelList.map((label) => (
          <MenuItem key={label.id}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControlLabel
                label={label.title}
                control={
                  <Checkbox
                    id={label.id}
                    onChange={handleLabelChange}
                    labelPlacement="end"
                  />
                }
              />
              <LabelOutlinedIcon />
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AddLabel;
