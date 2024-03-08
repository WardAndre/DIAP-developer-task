"use client";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { titanicData } from "@/utils/titanicData";

export default function BasicLineChart() {
  
  const ageFaresArr = titanicData.reduce((acc, cur) => {
    let idx = acc.findIndex((e) => e.Age === cur.Age);
    let fare = cur.Fare;

    if (idx > -1) {
      acc[idx].Fares.push(fare);
    } else {
      acc.push({
        Age: cur.Age,
        Fares: [fare],
      });
    }
    return acc;
  }, []);

  const graphData = ageFaresArr
    .map((obj) => ({
      Age: obj.Age,
      Fare: Number(
        obj.Fares.reduce((acc, cur) => acc + cur / obj.Fares.length).toFixed(2)
      ),
    }))
    .filter((obj) => obj.Age !== "")
    .sort((a, b) => a.Age - b.Age);

  return (
    <LineChart
      dataset={graphData}
      xAxis={[{ dataKey: "Age" }]}
      series={[
        {
          dataKey: "Fare",
        },
      ]}
      width={1200}
      height={350}
    />
  );
}
