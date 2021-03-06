import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./Background.css";
import Header from "../Header/Header";
import Display from "../Display/Display";

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "#C0C0C0",
  m: 1,
  style: {
    width: "95%",
    marginTop: "3rem",
    marginBottom: "1rem",
    paddingBottom: "2rem"
  },
};

const Background = () => {
  return (
    <div display="flex" justifyContent="center" className="main-container">
      <Grid container direction="row" justify="center" alignItems="center">
        <Box boxShadow={3} borderRadius={16} {...defaultProps}>
         <Header />
         <Display />
        </Box>
      </Grid>
    </div>
  );
};

export default Background;
