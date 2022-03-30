import React from "react";
import { blue } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import getCookies from "../../../service/getCookies";

const CommentAvatar = () => {
  const username = getCookies("username");

  return (
    <Avatar
      sx={{ bgcolor: blue[400], mr: 3 }}
      alt={username}
      src="/broken-image.jpg"
    />
  );
};

export default CommentAvatar;
