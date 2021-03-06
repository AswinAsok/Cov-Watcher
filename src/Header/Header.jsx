import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import './Header.css'

const defaultProps = {
  m: 1,
  style: { width: "12rem", padding: "6px" },
};

const Header = () => {
  return (
    <div className="header">
      <Grid container direction="column" justify="center" alignItems="center">
        <Box className="header-box" borderRadius={16} {...defaultProps}>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className="header-text">Cov-Watcher</div>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Header;
