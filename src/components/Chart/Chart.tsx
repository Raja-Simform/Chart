import ApexCharts from "apexcharts";
import styles from "./Chart.module.css";
import { useEffect, useRef } from "react";

interface ChartProps {
  type: string | null;
}

export default function Chart({ type }: ChartProps) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance: ApexCharts | null = null;

    if (chartRef.current && type) {
      const options = {
        series: [
          {
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
          },
        ],
        chart: {
          type: type as "bar" | "line" | "area",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: "end",
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany",
          ],
        },
      };

      chartInstance = new ApexCharts(chartRef.current, options);
      chartInstance.render();
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [type]);

  return <div className={styles.chart} ref={chartRef}></div>;
}
