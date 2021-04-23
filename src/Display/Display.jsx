import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../Dropdown/Dropdown";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Nationalstat from "../Nationalstat/Nationalstat";
import './Display.css'

const Display = () => {
  const [data, setData] = useState({ empty: "yes" });

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    const url = "https://api.covid19india.org/data.json";
    axios
      .get(`${url}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div>
      {(() => {
        if (data.empty !== "yes") {
          return <Nationalstat data={data.cases_time_series} />;
        }
      })()}
      <br></br>
      <Divider />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
      <div>
        <p className = "statewise">State-Wise Covid-19 Details</p>
      </div>
      </Grid>
      <Divider />
      <br></br>
      <Dropdown data={data} />
    </div>
  );
};

export default Display;
