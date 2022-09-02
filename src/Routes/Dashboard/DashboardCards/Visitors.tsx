import React from "react";
import { Box, Typography } from "@mui/material";
import VisibilityOultlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CCard from "../../../components/Reusble/Cards/CCard";
import MonthSelector from "../../../components/Reusble/FormElements/MonthSelector";
import { classes } from "./styles";

const Visitors: React.FC = () => {
  return (
    <CCard>
      <Box sx={classes.container}>
        <Box sx={classes.visitor.topContainer}>
          <Typography sx={classes.headerText}>
            <VisibilityOultlinedIcon sx={classes.headerIcon} />
            <span>Visitors</span>
          </Typography>
          <MonthSelector />
        </Box>
        <Box sx={classes.info}>
          <Typography sx={classes.largeText}>1824</Typography>
        </Box>

        <Box sx={classes.marketPlace.bottomText}>
          <Typography sx={classes.link}>
            <span>Do you want more visits? Contact us!</span>
          </Typography>
          <ArrowForwardIcon
            sx={{
              ...classes.visitor.visitorIcon,
              pl: 2,
              fontSize: 37,
              color: "#21B8F9",
            }}
          />
        </Box>
      </Box>
    </CCard>
  );
};

export default Visitors;
