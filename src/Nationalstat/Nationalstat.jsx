import React from "react";
import "./Nationalstat.css";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Graph from "../Graph/Graph";

const defaultProps = {
  m: 1.25,
  style: { width: "25vw", height: "6.5vh" },
};

const Nationalstat = ({ data }) => {
  const data_length = data.length - 1;

  return (
    <div>
      <br></br>
      <Divider />
      <br></br>
      <Grid container direction="row" justify="center" alignItems="center">
        <div className="nationalstattext">National Covid-19 Details</div>
      </Grid>
      <br></br>
      <Divider />
      <br></br>
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
      <br></br>
      <Divider />
      <br></br>
      <Grid container direction="column" justify="center" alignItems="center">
        <Graph data={data} />
      </Grid>
    </div>
  );
};

export default Nationalstat;
