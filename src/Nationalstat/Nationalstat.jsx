import React from "react";
import "./Nationalstat.css";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const defaultProps = {
  m: 1.25,
  style: { width: "25vw", height: "6.5vh" },
};

const Nationalstat = ({ data}) => {
  return (
    <div>
      <br></br>
      <Divider />
      <Grid container direction="row" justify="center" alignItems="center">
        <Box className="nationalstatheading" borderRadius={9} {...defaultProps}>
          <div className="nationalstattext">National Covid-19 Details</div>
        </Box>
      </Grid>

      {console.log(data.length)}
    </div>
  );
};

export default Nationalstat;
