"use client";
import { useState } from "react";
import styles from "./page.module.css";
import BasicSelect from "@/components/select";
import BasicTable from "./table/page";
import BasicLineChart from "./line_graph/page";
import BasicBars from "./histogram/page";

export default function Home() {
  const [visualizationType, setVisualizationType] = useState("");

  const componentToRender = {
    Table: <BasicTable />,
    LineGraph: <BasicLineChart />,
    Histogram: <BasicBars />,
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <BasicSelect
          setVisualizationType={setVisualizationType}
          visualizationType={visualizationType}
        />
      </div>

      <div className={styles.center}>
        {componentToRender[visualizationType]}
      </div>
    </main>
  );
}
