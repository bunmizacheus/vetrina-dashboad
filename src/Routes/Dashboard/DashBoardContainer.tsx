import React from "react";
import { Box, Grid } from "@mui/material";
import Visitors from "./DashboardCards/Visitors";
import Orders from "./DashboardCards/Orders";
import Configure from "./DashboardCards/Configure";
import MobileApp from "./DashboardCards/MobileApp";
import News from "./DashboardCards/News";
import TrustPilot from "./DashboardCards/TrustPilot";
import Customer from "./DashboardCards/Customer";
import Invite from "./DashboardCards/Invite";
import MarketPlace from "./DashboardCards/MarketPlace/MarketPlace";

const DashBoardContainer: React.FC = () => {
  return (
    <Box sx={{ minHeight: "auto", width: "100%" }}>
      <Grid
        sx={{ minHeight: "auto", width: "100%" }}
        container
        spacing={2}
        columns={12}
      >
        <Grid item xs={12} lg={8} sx={{ width: "100%" }}>
          <Grid container sx={{ width: "100%" }}>
            <Visitors />
            <Orders />
            <MobileApp />
            <MarketPlace />
            <News />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container sx={{ width: "100%" }}>
            <Configure />
            <TrustPilot />
            <Invite />
            <Customer />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoardContainer;
