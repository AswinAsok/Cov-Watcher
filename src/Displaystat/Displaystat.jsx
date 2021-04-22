import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';

const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '5rem', height: '5rem' },
  };

const Displaystat = ({ data, statecode }) => {
  const classes = useStyles();
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
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={3}
      >
        <div>
          <Grid item xs>
            <p>{statedata.active}</p>
          </Grid>
        </div>
        <div>
          <Grid item xs>
            <p>{statedata.confirmed}</p>
          </Grid>
        </div>
        <div>
          <Grid item xs>
            <p>{statedata.deaths}</p>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Displaystat;
