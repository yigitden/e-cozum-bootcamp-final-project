import { Typography } from "@mui/material";
import BoardList from "../../components/BoardList";
import ProfileAvatar from "../../components/ProfileAvatar";

const Boards = () => {
  
  return (
    <>
      <ProfileAvatar />

      <Typography
        sx={{
          my: 10,
          fontWeight: "medium",
        }}
        variant="h3"
        align="center"
      >
        Scrumboard App
      </Typography>

      <BoardList />
    </>
  );
};

export default Boards;
