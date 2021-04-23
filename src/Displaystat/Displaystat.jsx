import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./Displaystat.css";

const defaultProps = {
  m: 1,
  style: { width: "150px", height: "3rem" },
};

const defaultProps1 = {
  m: 1,
  style: { width: "115px", height: "2rem" },
};

const Displaystat = ({ data, statecode }) => {
  const [statedata, setStatedata] = useState({ empty: "yes" });

  const fetchstatedata = () => {
    if (statedata.empty === "yes" && data.empty !== "yes") {
      for (var i = 0; i < 38; i++) {
        if (data.statewise[i].statecode === statecode) {
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
      
      <Grid container direction="row" justify="center" alignItems="center">
        <div>
          <Box className="statrow1" borderRadius={9} {...defaultProps}>
            <div className="stattextr1">Active</div>
            <div className="stattextr1">{statedata.active}</div>
          </Box>
        </div>
        <div>
          <Box className="statrow2" borderRadius={9} {...defaultProps}>
            <div className="stattextr1">Confirmed</div>
            <div className="stattextr1">{statedata.confirmed}</div>
          </Box>
        </div>
        <div>
          <Box className="statrow3" borderRadius={9} {...defaultProps}>
            <div className="stattextr1">Deaths</div>
            <div className="stattextr1">{statedata.deaths}</div>
          </Box>
        </div>
      </Grid>

      <br></br>

      <Grid container direction="row" justify="center" alignItems="center">
        <div>
            <Box className="statrow11" borderRadius={9} {...defaultProps}>
              <div className="stattextr1">New Cases</div>
              <div className="stattextr1">{statedata.deltaconfirmed}</div>
            </Box>
        </div>
        <div>
            <Box className="statrow12" borderRadius={9} {...defaultProps}>
              <div className="stattextr1">Newly Recovered</div>
              <div className="stattextr1">{statedata.deltarecovered}</div>
            </Box>
        </div>
        <div>
            <Box className="statrow13" borderRadius={9} {...defaultProps}>
              <div className="stattextr1">New Deaths</div>
              <div className="stattextr1">{statedata.deltadeaths}</div>
            </Box>
        </div>
      </Grid>
    </div>
  );
};

export default Displaystat;
