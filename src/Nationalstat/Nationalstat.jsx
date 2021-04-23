import React from "react";
import "./Nationalstat.css";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Graph from "../Graph/Graph";

const defaultProps = {
  m: 1.25,
  style: { width: "25vw", padding: "5px"},
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
        <Box className="nationalrow" borderRadius={9} {...defaultProps}>
          <Grid
            container
            direction="column"
            alignItems="center"
          >
            <div className="nationalheading">Confirmed</div>
            <div className="nationalcount">
              {data[data_length].totalconfirmed}
            </div>
          </Grid>
        </Box>
        <Box className="nationalrow" borderRadius={9} {...defaultProps}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <div className="nationalheading">Recovered</div>
            <div className="nationalcount">
              {data[data_length].totalrecovered}
            </div>
          </Grid>
        </Box>
        <Box className="nationalrow" borderRadius={9} {...defaultProps}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <div className="nationalheading">Deceased</div>
            <div className="nationalcount">
              {data[data_length].totaldeceased}
            </div>
          </Grid>
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
