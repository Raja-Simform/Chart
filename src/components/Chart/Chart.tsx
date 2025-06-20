import ApexCharts from "apexcharts";
import styles from "./Chart.module.css";
import { useEffect, useRef } from "react";
import { useAppSelector } from "../../store/ChartStore";
import { ChartType } from "../../constants/constant";

interface ChartProps {
  type: ChartType;
}

export default function Chart({ type }: ChartProps) {
  const chartRef = useRef(null);
  const chartData = useAppSelector((state) => state.chart);

  useEffect(() => {
    let chartInstance: ApexCharts | null = null;

    if (chartRef.current && type) {
      const options: ApexCharts.ApexOptions = {
        chart: {
          type: type,
          height: "80%",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
      };

      switch (type) {
        case ChartType.Bar:
        case ChartType.Line:
        case ChartType.Area:
          options.series = [
            {
              data: chartData.y_axis,
            },
          ];
          options.xaxis = {
            categories: chartData.x_axis,
          };

          if (type === ChartType.Bar) {
            options.plotOptions = {
              bar: {
                borderRadius: 4,
                borderRadiusApplication: "end",
                horizontal: true,
              },
            };
          }
          break;

        case ChartType.Donut:
          options.series = chartData.y_axis;
          options.labels = chartData.x_axis;
          options.dataLabels = { enabled: true };
          options.responsive = [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ];
          break;

        default:
          break;
      }

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
      {type ? null : "No chart Selected"}
    </div>
  );
}
