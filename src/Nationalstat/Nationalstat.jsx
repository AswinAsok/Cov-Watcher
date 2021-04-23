import React from "react";
import "./Nationalstat.css";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const defaultProps = {
  m: 1.25,
  style: { width: "25vw", height: "6.5vh" },
};

const Nationalstat = ({data}) => {

  const data_length = data.length-1;

  return (
    <div>
      <br></br>
      <Divider />
      <Grid container direction="row" justify="center" alignItems="center">
        <Box className="nationalstatheading" borderRadius={9} {...defaultProps}>
          <div className="nationalstattext">National Covid-19 Details</div>
        </Box>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <Box className="statrow1" borderRadius={9} {...defaultProps}>
          <div className="stattextr11">Confirmed</div>
          <div className="stattextr1">{data[data_length].totalconfirmed}</div>
        </Box>
        <Box className="statrow2" borderRadius={9} {...defaultProps}>
          <div className="stattextr11">Recovered</div>
          <div className="stattextr1">{data[data_length].totalrecovered}</div>
        </Box>
        <Box className="statrow3" borderRadius={9} {...defaultProps}>
          <div className="stattextr11">Deceased</div>
          <div className="stattextr1">{data[data_length].totaldeceased}</div>
        </Box>
      </Grid>
    </div>
  );
};

export default Nationalstat;
