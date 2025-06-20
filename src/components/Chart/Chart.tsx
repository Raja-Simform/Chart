import ApexCharts from "apexcharts";
import styles from "./Chart.module.css";
import { useEffect, useRef } from "react";
import { useAppSelector } from "../../store/ChartStore";

interface ChartProps {
  type: string | null;
}

export default function Chart({ type }: ChartProps) {
  const chartRef = useRef(null);
  const chartData = useAppSelector((state) => state.chart);

  useEffect(() => {
    let chartInstance: ApexCharts | null = null;

    if (chartRef.current && type) {
      const options = {
        series: [
          {
            data: chartData.y_axis,
          },
        ],
        chart: {
          type: type,
          height: "80%",
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
          enabled: true,
        },
        xaxis: {
          categories: chartData.x_axis,
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
  }, [type, chartData.y_axis, chartData.x_axis]);

  return (
    <div className={styles.chart} ref={chartRef}>
      No Chart Selected
    </div>
  );
}
