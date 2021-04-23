import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Displaystat from "../Displaystat/Displaystat";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Dropdown = ({ data }) => {
  const classes = useStyles();
  const states_array = [];
  const [statecode, setStateCode] = useState("");
  const [statedata, setStatedata] = useState({ empty: "yes" });

  const makearray = () => {
    if (data.empty !== "yes") {
      for (var i = 0; i < 38; i++) {
        var state = data.statewise[i].state;
        states_array.push(state);
      }
    }
  };

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Select State
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={(event) => {
              setStateCode(event.target.value);
              setStatedata({ empty: "yes" });
            }}
          >
            {makearray()}
            {states_array.map((state, index) => (
              <MenuItem value={state} key={index}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      
      <Displaystat data={data} statecode={statecode} statedata={statedata} setStatedata={setStatedata}/>
    </div>
  );
};

export default Dropdown;
