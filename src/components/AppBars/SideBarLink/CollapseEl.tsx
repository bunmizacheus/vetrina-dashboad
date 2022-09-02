import React, { useState, useContext, useEffect } from "react";
import { contextObj } from "../../../store/app-context";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { LinkDataPropDef } from "../../../utils/interfaceDef";
import { classes } from "./SideBarStyles";

const CollapseEl: React.FC<LinkDataPropDef> = (props) => {
  const [open, setOpen] = useState(false);
  const AppCtx = useContext(contextObj);
  // const isSelected = props.active === props.to ? true : false;
  useEffect(() => {
    if (AppCtx.open) return;
    setOpen(false);
  }, [AppCtx.open]);
  return (
    <React.Fragment>
      <ListItemButton
        sx={classes.itemButton}
        onClick={() => setOpen((open) => !open)}
      >
        <ListItemIcon
          sx={{ ...classes.itemIconCollapse, mr: AppCtx.open ? 4 : 6.5 }}
        >
          <props.Icon />
        </ListItemIcon>
        <ListItemText primary={props.text} sx={classes.itemText} />
        {!open && <ExpandMore />}
        {open && <ExpandLess />}
      </ListItemButton>
      <Collapse in={open} sx={classes.collapseBackground} unmountOnExit>
        <List disablePadding>
          {props?.subLinks?.map((sublink, i) => (
            <Link style={classes.linkEl} to={`/${sublink.to}`} key={i}>
              <ListItemButton sx={classes.itemButtonCollapse}>
                <ListItemText
                  primary={sublink.text}
                  sx={classes.itemTextSideBarLinks}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default CollapseEl;
