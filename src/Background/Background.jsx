import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./Background.css";

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  style: { width: "95%", height: "40rem", marginTop: "3rem", marginBottom: "3rem"},
};

const Background = () => {
  return (
    <div display="flex" justifyContent="center" className="main-container">
      <Grid container direction="row" justify="center" alignItems="center">
        <Box borderRadius={16} {...defaultProps} />
      </Grid>
    </div>
  );
};

export default Background;
