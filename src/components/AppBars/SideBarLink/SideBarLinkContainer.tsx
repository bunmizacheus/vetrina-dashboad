import React from "react";
import { List } from "@mui/material";
import { Link } from "react-router-dom";
import CollapseEl from "./CollapseEl";
import SideBarLinks from "./SideBarLinks";
import { LinkDataPropDef } from "../../../utils/interfaceDef";
import { classes } from "./SideBarStyles";

const SideBarLinkContainer: React.FC<LinkDataPropDef> = (props) => {
  return (
    <List>
      {props.subLinks && <CollapseEl {...props} />}

      {!props.subLinks && (
        <Link style={classes.linkEl} to={`/${props.to}`}>
          <SideBarLinks {...props} />
        </Link>
      )}
    </List>
  );
};
export default SideBarLinkContainer;
