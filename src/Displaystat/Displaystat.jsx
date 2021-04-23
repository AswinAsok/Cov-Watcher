import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./Displaystat.css";
import Nationalstat from "../Nationalstat/Nationalstat";

const defaultProps = {
  m: 1.25,
  style: { width: "25vw", height: "6.5vh" },
};

const Displaystat = ({ data, statecode }) => {
  const [statedata, setStatedata] = useState({ empty: "yes" });

  const fetchstatedata = () => {
    if (statedata.empty === "yes" && data.empty !== "yes") {
      for (var i = 0; i < 38; i++) {
        if (data.statewise[i].state === statecode) {
          setStatedata(data.statewise[i]);
          break;
        }
      }
    }
  };

  return (
    <div>
      {fetchstatedata()}
      <br></br>
      <div className="headingone">
        <Grid container direction="column" justify="center" alignItems="center">
          <div>Last Updated: {statedata.lastupdatedtime}</div>
          <br></br>
        </Grid>
      </div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Box className="statrow1" borderRadius={9} {...defaultProps}>
          <div className="stattextr11">Active</div>
          <div className="stattextr1">{statedata.active}</div>
        </Box>
        <Box className="statrow2" borderRadius={9} {...defaultProps}>
          <div className="stattextr11">Confirmed</div>
          <div className="stattextr1">{statedata.confirmed}</div>
        </Box>
        <Box className="statrow3" borderRadius={9} {...defaultProps}>
          <div className="stattextr11">Deaths</div>
          <div className="stattextr1">{statedata.deaths}</div>
        </Box>
      </Grid>

      <br></br>

      <Grid container direction="row" justify="center" alignItems="center">
        <Box className="statrow11" borderRadius={9} {...defaultProps}>
          <div className="stattextr11">New Cases</div>
          <div className="stattextr1">{statedata.deltaconfirmed}</div>
        </Box>
        <Box className="statrow12" borderRadius={9} {...defaultProps}>
          <div className="stattextr11">Recovered</div>
          <div className="stattextr1">{statedata.deltarecovered}</div>
        </Box>
        <Box className="statrow13" borderRadius={9} {...defaultProps}>
          <div className="stattextr11">New Deaths</div>
          <div className="stattextr1">{statedata.deltadeaths}</div>
        </Box>
      </Grid>

      <Nationalstat data={data.cases_time_series}/>
    </div>
  );
};

export default Displaystat;
