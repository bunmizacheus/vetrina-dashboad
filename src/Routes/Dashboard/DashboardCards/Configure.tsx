import React from "react";
import { Box, Typography } from "@mui/material";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import CCard from "../../../components/Reusble/Cards/CCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { classes } from "./styles";

const Configure: React.FC = () => {
  return (
    <CCard lg={12}>
      <Box sx={classes.container}>
        <Box sx={classes.visitor.topContainer}>
          <Typography sx={classes.configure.headertext}>
            <BuildOutlinedIcon sx={classes.headerIcon} />
            <span>Configure Your Shop</span>
          </Typography>
        </Box>

        <Box sx={classes.info}>
          <Typography sx={classes.configure.infotext} variant="h3">
            45%
          </Typography>
          <Typography variant="body1" sx={classes.configure.infoComplete}>
            Completed
          </Typography>
        </Box>
        <Box sx={classes.configure.infoBodyText}>
          <Typography variant="body1">
            Complete all the steps to have a complete shop to best present to
            your customers.
          </Typography>
        </Box>
        <Box sx={classes.trustPilot.footerContainer}>
          <Typography sx={classes.trustPilot.footerText}>
            <span style={classes.setupText}>Complete the setup</span>
            <ArrowForwardIcon
              sx={{
                ...classes.trustPilot.footerText.forwardArrow,
                ...classes.setupText,
              }}
            />
          </Typography>
        </Box>
      </Box>
    </CCard>
  );
};
export default Configure;
