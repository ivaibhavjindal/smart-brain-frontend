import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const styles = {
  link: {
    textDecoration: "none",
    color: "#fff",
  },
};

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Smart Brain
          </Typography>
          <Link to="/models" style={styles.link}>
            <Button color="inherit">Models</Button>
          </Link>
          <Link to="/signin" style={styles.link}>
            <Button color="inherit">Signin</Button>
          </Link>
          <Link to="/signup" style={styles.link}>
            <Button color="inherit">Signup</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
