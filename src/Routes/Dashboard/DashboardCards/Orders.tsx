import React from "react";
import { Box, Typography } from "@mui/material";
import CCard from "../../../components/Reusble/Cards/CCard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MonthSelector from "../../../components/Reusble/FormElements/MonthSelector";
import { OrderObj } from "../../../utils/interfaceDef";
import { classes } from "./styles";

const orderList: OrderObj[] = [
  { name: "Orders received: ", value: "156" },
  { name: "Earnings:", value: "£1893,24" },
];

const Orders: React.FC = () => {
  return (
    <CCard>
      <Box sx={classes.container}>
        <Box sx={classes.visitor.topContainer}>
          <Typography sx={classes.headerText}>
            <FormatListBulletedIcon sx={classes.headerIcon} />
            <span>Orders</span>
          </Typography>
          <MonthSelector />
        </Box>
        <Box sx={classes.info}>
          {orderList.map((item, i) => (
            <Box sx={classes.info.container} key={i}>
              <Typography sx={classes.info.infoText}>{item.name}</Typography>
              <Typography sx={classes.info.infoSum}>{item.value}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={classes.marketPlace.bottomText}>
          <Typography sx={{ ...classes.link, pt: 1.2 }}>
            <span>10 free tips to increase your sales</span>
          </Typography>
        </Box>
      </Box>
    </CCard>
  );
};

export default Orders;
