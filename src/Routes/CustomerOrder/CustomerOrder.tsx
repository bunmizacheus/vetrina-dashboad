import React from "react";
import ComponentWrapper from "../../components/ComponentWrapper/ComponentWrapper";
import { Box, Typography } from "@mui/material";
import { classes } from "./customerOrderStyles";

const CustomerOrder: React.FC = () => {
  return (
    <Box sx={classes.ordersCon}>
      <Typography variant="h1">Place your Order now</Typography>
    </Box>
  );
};
export default ComponentWrapper(CustomerOrder, "Orders");
