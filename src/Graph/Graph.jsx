import React, { useState } from "react";
import {Line, defaults, Bubble} from "react-chartjs-2";
import './Graph.css'

const Graph = ({ data }) => {
  const data_length = data.length - 1;
  const dailyconfirmed = [];
  const dailyrecovered = [];
  const dates = [];

  const storeconfirmed = () => {
    for (var i = 0; i <= data_length; i++) {
      dailyconfirmed.push(data[i].dailyconfirmed);
      dailyrecovered.push(data[i].dailyrecovered);
      dates.push(data[i].dateymd);
    }
  };

  return (
    <div>
      {storeconfirmed()}
      <div className="chart1">

        <Line
          data={{
            labels: dates,
            datasets: [
              {
                label: "Daily Confirmed Cases",
                data: dailyconfirmed,
                fill: true,

                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
              },
            ],
          }}
          height={300}
          width={400}
          options={{
            maintainAspectRatio: false,
            tooltips: false,
          }}
        />

      </div>

    <br></br>

      <div className="chart1">

        <Line
          data={{
            labels: dates,
            datasets: [
              {
                label: "Daily Recovered Cases",
                data: dailyrecovered,
                fill: true,

                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
              },
            ],
          }}
          height={300}
          width={400}
          options={{
            maintainAspectRatio: false,
            tooltips: false,
          }}
        />
        
      </div>
    </div>
  );
};

export default Graph;
