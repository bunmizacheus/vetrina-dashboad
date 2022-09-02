import { Box, Button, Toolbar, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { classes } from "./styles";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={classes.homeCon}>
      <AppBar position="absolute" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={classes.iconBtn}
          ></IconButton>
          <Typography variant="h6" component="div" sx={classes.wlcMsg}>
            Welcome to VetrinaLive!
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/Dashboard");
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// export default Home;
