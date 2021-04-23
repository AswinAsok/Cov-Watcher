import React, { useState } from "react";
import { Line } from "react-chartjs-2";

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
        {console.log(Array.isArray(dailyconfirmed))}
      <Line
        data={{
            labels: dates,
            datasets: [
                {
                    label: '# of Votes',
                    data: dailyconfirmed,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    
                }
            ]
        }}
        height={200}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default Graph;
