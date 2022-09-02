import React from "react";
import { Box, Typography } from "@mui/material";
import CCard from "../../../components/Reusble/Cards/CCard";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { classes } from "./styles";

const Invite: React.FC = () => {
  return (
    <CCard lg={12}>
      <Box sx={classes.container}>
        <Typography sx={classes.invite.head}>
          <GroupOutlinedIcon sx={classes.invite.headIcon} />
          <span>Invite friend</span>
        </Typography>
        <Box sx={classes.invite.infoContainer}>
          <Typography sx={classes.invite.info}>
            <span style={classes.invite.recieve50Products}>
              Receive 50 products
            </span>{" "}
            by inviting a friend who subscribes to a plan. Your friend will
            receive a 30% discount coupon valid for any plan.
          </Typography>
        </Box>
        <Box sx={classes.invite.footerContainer}>
          <Typography sx={classes.invite.footerTextI}>
            <span> Start iniviting friends!</span>
            <ArrowForwardIcon sx={classes.invite.footerTextI.forwardArrow} />
          </Typography>
        </Box>
      </Box>
    </CCard>
  );
};

export default Invite;
