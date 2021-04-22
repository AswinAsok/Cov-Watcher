import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./Displaystat.css";

const defaultProps = {
  m: 1,
  style: { width: "150px", height: "3rem" },
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
      <Grid container  direction="row" justify="center" alignItems="center">
        <div>
          <Grid item xs={3}>
            <Box className="statrow1" borderRadius={9} {...defaultProps}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <div className="stattextr1">Active</div>
                <div>{statedata.active}</div>
              </Grid>
            </Box>
          </Grid>
        </div>
        <div>
          <Grid item xs={6}>
            <Box className="statrow2" borderRadius={9} {...defaultProps}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <div className="stattextr1">Confirmed</div>
                <div>{statedata.confirmed}</div>
              </Grid>
            </Box>
          </Grid>
        </div>
        <div>
          <Grid item xs={3}>
            <Box className="statrow3" borderRadius={9} {...defaultProps}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className="stattextr1"
              >
                <div className="stattextr1">Deaths</div>
                <div>{statedata.deaths}</div>
              </Grid>
            </Box>
          </Grid>
        </div>
      </Grid>

      <Grid container  direction="row" justify="center" alignItems="center">
        <div>
          <Grid item xs={3}>
            <Box className="statrow11" borderRadius={9} {...defaultProps}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <div className="stattextr1">New Cases</div>
                <div>{statedata.deltaconfirmed}</div>
              </Grid>
            </Box>
          </Grid>
        </div>
        <div>
          <Grid item xs={6}>
            <Box className="statrow12" borderRadius={9} {...defaultProps}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <div className="stattextr1">Newly Recovered</div>
                <div>{statedata.deltarecovered}</div>
              </Grid>
            </Box>
          </Grid>
        </div>
        <div>
          <Grid item xs={3}>
            <Box className="statrow13" borderRadius={9} {...defaultProps}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className="stattextr1"
              >
                <div className="stattextr1">New Deaths</div>
                <div>{statedata.deltadeaths}</div>
              </Grid>
            </Box>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Displaystat;
