import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./Displaystat.css";
import Nationalstat from "../Nationalstat/Nationalstat";

const defaultProps = {
  m: 0.6,
  style: { width: "25vw", padding: "5px"},
};

const Displaystat = ({ data, statecode, statedata, setStatedata }) => {
  const fetchstatedata = () => {
    if (statedata.empty === "yes" && data.empty !== "yes") {
      for (var i = 0; i < 38; i++) {
        if (data.statewise[i].state === statecode) {
          setStatedata(data.statewise[i]);
          console.log("Hello");
          break;
        }
      }
    }
  };

  return (
    <div>
      {fetchstatedata()}
      {console.log(statecode)}
      <br></br>
      <div className="lastupdated">
        <Grid container direction="column" justify="center" alignItems="center">
          <div>Last Updated: {statedata.lastupdatedtime}</div>
          <br></br>
        </Grid>
      </div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Box className="staterowone" borderRadius={9} {...defaultProps}>
          <div className="statetext">
            <div className="statetextheading">Active</div>
            <div className="statecount">{statedata.active}</div>
          </div>
        </Box>
        <Box className="staterowone" borderRadius={9} {...defaultProps}>
          <div className="statetext">
            <div className="statetextheading">Confirmed</div>
            <div className="statecount">{statedata.confirmed}</div>
          </div>
        </Box>
        <Box className="staterowone" borderRadius={9} {...defaultProps}>
          <div className="statetext">
            <div className="statetextheading">Deaths</div>
            <div className="statecount">{statedata.deaths}</div>
          </div>
        </Box>
      </Grid>

      <br></br>

      <Grid container direction="row" justify="center" alignItems="center">
        <Box className="staterowtwo" borderRadius={9} {...defaultProps}>
          <div className="statetext">
            <div className="statetextheading">New Cases</div>
            <div className="statecount">{statedata.deltaconfirmed}</div>
          </div>
        </Box>
        <Box className="staterowtwo" borderRadius={9} {...defaultProps}>
          <div className="statetext">
            <div className="statetextheading">Recovered</div>
            <div className="statecount">{statedata.deltarecovered}</div>
          </div>
        </Box>
        <Box className="staterowtwo" borderRadius={9} {...defaultProps}>
          <div className="statetext">
            <div className="statetextheading">New Deaths</div>
            <div className="statecount">{statedata.deltadeaths}</div>
          </div>
        </Box>
      </Grid>
    </div>
  );
};

export default Displaystat;
