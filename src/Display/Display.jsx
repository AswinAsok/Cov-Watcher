import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../Dropdown/Dropdown";
import Divider from "@material-ui/core/Divider";

const Display = () => {
  const [data, setData] = useState({empty: "yes"});

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
      <Divider />
      <Dropdown data={data}/>
    </div>
  );
};

export default Display;
