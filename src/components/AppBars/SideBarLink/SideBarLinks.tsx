import React, { useContext } from "react";
import { Box } from "@mui/material";
import { LinkDataPropDef } from "../../../utils/interfaceDef";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { classes } from "./SideBarStyles";
import { contextObj } from "../../../store/app-context";

const SideBarLinks: React.FC<LinkDataPropDef> = (props) => {
  const AppCtx = useContext(contextObj);
  const open = AppCtx.open;
  const isSelected = props.active === props.to;

  return (
    <ListItemButton
      style={{
        borderLeft: `4px solid ${isSelected ? "#21B8F9" : "#fff"}`,
        backgroundColor: isSelected ? "#F6F6F6" : "white",
      }}
      sx={classes.sideLinksContainer}
    >
      <ListItemIcon sx={{ ...classes.itemIconLinks, mr: open ? 2.5 : 5 }}>
        <props.Icon sx={{ color: isSelected ? "#21B8F9" : "#333333" }} />
      </ListItemIcon>
      <ListItemText
        primary={props.text}
        sx={{
          ...classes.itemTextSideBarLinks,
          color: isSelected ? "#21B8F9" : "#333333",
        }}
      />

      {props.fab && (
        <Box component="div" sx={classes.fab}>
          <Box sx={classes.fabText}>{props.fab}</Box>
        </Box>
      )}
    </ListItemButton>
  );
};

export default SideBarLinks;
