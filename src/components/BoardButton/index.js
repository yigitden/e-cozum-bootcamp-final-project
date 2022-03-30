import { Box, Button, Typography } from "@mui/material";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import { grey } from "@mui/material/colors";
const BoardButton = ({ boardName, id }) => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        boxShadow: 2,
        mr: 5,
        mb: 5,
        width: "192px",
        height: "192px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: grey[100],
        transition: "0.5s",

        "&:hover": {
          cursor: "pointer",
          boxShadow: 6,
        },
      }}
    >
      <InsertChartOutlinedIcon sx={{ fontSize: 55, mb: 2, color: grey[600] }} />
      <Typography sx={{ fontWeight: "medium" }}>{boardName}</Typography>
    </Box>
  );
};

export default BoardButton;
