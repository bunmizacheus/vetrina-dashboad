import { Box } from "@mui/material";
import MainHeader from "../AppBars/MainHeader";
import SideBar from "../AppBars/SideBar";
import { classes } from "./styles";

const ComponentWrapper = (Component: any, active: string) => () => {
  return (
    <Box sx={classes.layout}>
      <MainHeader active={active} />
      <SideBar active={active} />
      <Component />
    </Box>
  );
};

export default ComponentWrapper;
