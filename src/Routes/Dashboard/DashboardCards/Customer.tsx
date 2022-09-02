import React from "react";
import CCard from "../../../components/Reusble/Cards/CCard";
import { Box, Button, Typography } from "@mui/material";
import HeadPhonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import { classes } from "./styles";
import { images } from "../../../assets";
const Customer: React.FC = () => {
  return (
    <CCard lg={12}>
      <Box sx={classes.container}>
        <Typography sx={classes.invite.head}>
          <HeadPhonesOutlinedIcon
            id="Headphone_Icon"
            sx={classes.invite.headIcon}
          />
          Customer support
        </Typography>
        <Box sx={classes.customer.infoContainer}>
          <Box
            component="img"
            sx={classes.customer.imgSize}
            src={images.phone}
          />
          <Typography sx={classes.customer.infoText}>
            Zacheus is here to help you
          </Typography>
        </Box>
        <Button sx={classes.customer.contactUsContainer} variant="contained">
          Contact us
        </Button>
      </Box>
    </CCard>
  );
};

export default Customer;
