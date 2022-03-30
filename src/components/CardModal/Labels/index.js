import { Box, Typography } from "@mui/material";
import React from "react";
import Label from "../../Label";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { grey } from "@mui/material/colors";
import { getAllCard } from "../../../features/CardSlice";
import { useAppDispatch } from "../../../store";
import Api from "../../../service/Api";

const Labels = ({ card }) => {
  const dispatch = useAppDispatch();

  const onDelete = () => {
    Api().delete();
    dispatch(getAllCard());
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <LabelOutlinedIcon />
        <Typography>Labels</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          border: 1,
          borderRadius: 1,
          p: 1,
          borderColor: grey[500],
        }}
      >
        {card.labels &&
          card.labels.map((label) => (
            <Box key={label.id}>
              <Label text={label.title} onDelete={onDelete} />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Labels;
