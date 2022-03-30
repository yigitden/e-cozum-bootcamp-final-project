import { AppBar, Tabs, Tab, Box, useTheme, Paper } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import TabPanel from "./TabPanel";

const Auth = ({ setIsLogged }) => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  <TabPanel />;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <Box
      sx={{ bgcolor: "background.paper", width: "25%", mx: "auto", mt: "7rem" }}
    >
      <Paper elevation={4} variant="outlined">
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="LOGIN" {...a11yProps(0)} />
            <Tab label="REGISTER" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Login setIsLogged={setIsLogged} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Register setIsLogged={setIsLogged} />
          </TabPanel>
        </SwipeableViews>
      </Paper>
    </Box>
  );
};
export default Auth;
