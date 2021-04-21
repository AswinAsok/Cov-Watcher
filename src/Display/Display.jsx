import React, { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [data, setData] = useState({});

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

  return <div>{console.log(data)}</div>;
};

export default Display;
