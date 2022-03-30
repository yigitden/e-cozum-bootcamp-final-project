import React from "react";
import Button from "@mui/material/Button";

const ButtonRadius = ({ text, func }) => {
  return (
    <Button
      sx={{
        mt: 1,
        borderRadius: 8,
      }}
      size="small"
      variant="contained"
      onClick={func}
    >
      {text}
    </Button>
  );
};

export default ButtonRadius;
