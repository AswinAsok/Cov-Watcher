import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Grid container direction="column" justify="center" alignItems="center">
        <p>Covid-Watch</p>
      </Grid>
    </div>
  );
};

export default Header;
