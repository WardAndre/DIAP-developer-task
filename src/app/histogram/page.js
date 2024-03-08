import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { titanicData } from "@/utils/titanicData";

export default function BasicBars() {
  const survivalsPerClass = titanicData.reduce((acc, cur) => {
    let idx = acc.findIndex((e) => e.Pclass === cur.Pclass);
    let survived = cur.Survived;

    if (idx > -1) {
      acc[idx].Survived.push(survived);
    } else {
      acc.push({
        Pclass: cur.Pclass,
        Survived: [survived],
      });
    }
    return acc;
  }, []);

  const chartData = survivalsPerClass
    .map((obj) => ({
      Pclass: obj.Pclass,
      Survived: obj.Survived.reduce((acc, cur) => acc + cur),
    }))
    .sort((a, b) => a.Pclass - b.Pclass);

  return (
    <BarChart
      dataset={chartData}
      xAxis={[
        { scaleType: "band", dataKey: "Pclass", label: "Passenger Class" },
      ]}
      series={[{ dataKey: "Survived", label: "Survived" }]}
      width={1200}
      height={450}
    />
  );
}
