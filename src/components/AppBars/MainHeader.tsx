import React, { useContext } from "react";
import { AppBar } from "../../utils/helperFunction";
import { contextObj } from "../../store/app-context";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Badge,
  Container,
  Box,
  Typography,
  Toolbar,
  IconButton,
} from "@mui/material";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import { classes } from "./styles";

const MainHeader: React.FC<{ active: string }> = ({ active }) => {
  const AppCtx = useContext(contextObj);
  const open = AppCtx.open;
  const handleDrawerOpen = AppCtx.handleDrawerOpen;

  return (
    <AppBar position="fixed" elevation={0} open={open} sx={classes.appBar.main}>
      <Toolbar sx={classes.appBar.toolbar}>
        <Box sx={classes.appBar.toolbar}>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Container sx={classes.appBar.toolbar}>
          <Typography variant="h6" sx={classes.appBar.dashboardText}>
            {active}
          </Typography>
          <Box sx={classes.appBar.iconContainer}>
            <ElectricBoltOutlinedIcon />
            <Badge badgeContent={2} color="error">
              <Typography sx={classes.appBar.WhatIsNew}>What's new</Typography>
            </Badge>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
