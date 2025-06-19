import { ChartType } from "../../constants/constant";
import styles from "./SideBar.module.css";
import { Button } from "primereact/button";

interface SideBarProps {
  handleClick: (type: ChartType) => void;
}
export default function SideBar({ handleClick }: SideBarProps) {
  return (
    <div className={styles.sidebar}>
      <h2>Choose Graph from below</h2>
      <Button
        type="button"
        label="Bar Chart"
        className={styles.buttonchart}
        onClick={() => handleClick(ChartType.Bar)}
      />
      <Button
        type="button"
        label="Line Chart"
        className={styles.buttonchart}
        onClick={() => handleClick(ChartType.Line)}
      />
      <Button
        type="button"
        label="Area Chart"
        className={styles.buttonchart}
        onClick={() => handleClick(ChartType.Area)}
      />
    </div>
  );
}
