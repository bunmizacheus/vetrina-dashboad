import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import CCard from "../../../components/Reusble/Cards/CCard";
import { classes } from "./styles";

const TrustPilot: React.FC = () => {
  return (
    <CCard lg={12} color="#000032">
      <Box sx={classes.container}>
        <Typography sx={classes.trustPilot.head}>
          <StarIcon sx={classes.trustPilot.headerIcon} />
          <span>TrustPilot</span>
        </Typography>
        <Box sx={classes.trustPilot.infoContainer}>
          <Typography variant="body2" sx={classes.trustPilot.info}>
            Show us your love by leaving a{" "}
            <span style={classes.trustPilot.positive}>positive </span>review on
            trust pilot and receive the extension of{" "}
            <span style={classes.trustPilot.products}>
              50 additional products
            </span>
          </Typography>
        </Box>
        <Box>
          <Typography sx={classes.trustPilot.footerText}>
            <span>Write a review of TrustPilot</span>
            <ArrowForwardIcon sx={classes.trustPilot.footerText.forwardArrow} />
          </Typography>
        </Box>
      </Box>
    </CCard>
  );
};

export default TrustPilot;
