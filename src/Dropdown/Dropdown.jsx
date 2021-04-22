import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Dropdown = ({ data }) => {
  const classes = useStyles();
  const states_array = [];

  const makearray = () => {
    if (data.empty !== "yes") {
      for (var i = 0; i < 38; i++) {
        var state = data.statewise[i].statecode;
        states_array.push(state);
      }
    }
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {makearray()}
          {states_array.map((state, index) => (
            <MenuItem value={state} key={index}>
                {state}
                {console.log(state)}
            </MenuItem>
          ))}
          
        </Select>
        <FormHelperText>Auto width</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Dropdown;
