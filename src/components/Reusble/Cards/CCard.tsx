import React from "react";
import { Card, Grid } from "@mui/material";
import { classes } from "./CardStyle";

const CCard: React.FC<{
  children: React.ReactNode;
  lg?: number;
  sm?: number;
  h?: number;
  color?: string;
}> = ({ children, sm, lg, h, color }) => {
  return (
    <Grid
      item
      xs={12}
      sm={sm ? sm : 6}
      lg={lg ? lg : 6}
      sx={{ ...classes.cardwrapper, height: h ? h : "auto" }}
    >
      <Card elevation={2} sx={classes.card} style={{ backgroundColor: color }}>
        {children}
      </Card>
    </Grid>
  );
};

export default CCard;
