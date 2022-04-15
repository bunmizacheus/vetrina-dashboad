import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Dashboard
              </Typography>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={2} color="error">
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    What's new
                  </Typography>
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      <div>{/* <main>{props.children}</main> */}</div>
    </div>
  );
};

export default Layout;
