import React, { useContext } from "react";
import { contextObj } from "../../store/app-context";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, DrawerHeader } from "../../utils/helperFunction";
import SelectEl from "../Reusble/FormElements/Select";
import { linkData, linkData2 } from "./SideBarLink/SideBarLinkData";
import SideBarLinkContainer from "./SideBarLink/SideBarLinkContainer";
import { Divider } from "@mui/material";
import { classes } from "./styles";

const SideBar: React.FC<{ active: string }> = ({ active }) => {
  const AppCtx = useContext(contextObj);
  const open = AppCtx.open;
  const handleDrawerClose = AppCtx.handleDrawerClose;
  return (
    <Box>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={classes.sideBar.sideHeader}>
          <Typography
            variant="h5"
            component="div"
            sx={classes.sideBar.vetrinaText}
          >
            Vetrina
            <span style={classes.sideBar.liveColor}>live</span>
          </Typography>

          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>

        {linkData?.map((data, i) => (
          <SideBarLinkContainer key={i} active={active} {...data} />
        ))}

        <Divider sx={classes.sideBar.divider} />
        <Box component="div" sx={classes.sideBar.SideBarlinkBox}>
          {linkData2.map((data, i) => (
            <SideBarLinkContainer active={active} {...data} key={i} />
          ))}
        </Box>

        {open && (
          <Box sx={classes.sideBar.selectElCon}>
            <Typography>Select your shop</Typography>
            <SelectEl />
          </Box>
        )}
      </Drawer>
    </Box>
  );
};

export default SideBar;
