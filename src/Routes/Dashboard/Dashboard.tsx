import React from "react";
import { Box, Container, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { classes } from "./dashboardStyles";
import DashBoardContainer from "./DashBoardContainer";
import ComponentWrapper from "../../components/ComponentWrapper/ComponentWrapper";

const Dashboard: React.FC = () => {
  return (
    <Box sx={classes.dashboardCon}>
      <Box sx={classes.dashboardInfoBox}>
        <Container sx={classes.container}>
          <Typography sx={classes.welcomeMsg}> Welcome Zacheus!</Typography>
          <Box sx={classes.appVetrinaContainer}>
            <Typography sx={classes.appVetrinaText}>
              app.vetrinalive.it/fench-store
            </Typography>
            <OpenInNewIcon />
          </Box>
        </Container>
      </Box>
      <Box sx={classes.dashboardMainCon}>
        <Container>
          <DashBoardContainer />
        </Container>
      </Box>
    </Box>
  );
};

export default ComponentWrapper(Dashboard, "Dashboard");
