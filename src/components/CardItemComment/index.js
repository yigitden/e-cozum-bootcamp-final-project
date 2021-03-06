import React from "react";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { Typography } from "@mui/material";

const CardItemComment = ({ card }) => {
  return (
    <>
      <CommentOutlinedIcon sx={{ fontSize: "medium", pr: 1 }} />
      <Typography
        sx={{ fontSize: 14, fontWeight: "medium", pr: 2 }}
        component="div"
      >
        {card.comments && card.comments.length !== 0 ? (
          <>{card.comments.length} </>
        ) : (
          0
        )}
      </Typography>
    </>
  );
};

export default CardItemComment;
