import React from "react";
import CCard from "../../../components/Reusble/Cards/CCard";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { images } from "../../../assets";
import { classes } from "./styles";

const MobileApp: React.FC = () => {
  return (
    <CCard color="#F3A35C">
      <Box sx={classes.container}>
        <Box sx={classes.mobileApp.subCon}>
          <Box>
            <Box sx={classes.mobileApp.layout}>
              <Box>
                <Typography variant="h3" sx={classes.mobileApp.mainText}>
                  Sell your products on your exclusive App published on the
                  stores
                </Typography>
                <Box sx={classes.mobileApp.showMoreCon}>
                  <Typography sx={classes.link}>
                    <span style={classes.mobileApp.showMore}>Show more</span>
                    <ArrowForwardIcon
                      sx={{
                        ...classes.visitor.visitorIcon,
                        pl: 1,
                        color: "#fff",
                      }}
                    />
                  </Typography>
                </Box>
              </Box>

              <Box
                component="img"
                sx={classes.mobileApp.phoneSize}
                src={images.phone}
              />
            </Box>
          </Box>
          <Box>
            <Box sx={classes.mobileApp.logoContainer}>
              {[images.apple, images.google].map((img, i) => (
                <Box
                  component="img"
                  sx={classes.mobileApp.img}
                  src={img}
                  key={i}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </CCard>
  );
};

export default MobileApp;
