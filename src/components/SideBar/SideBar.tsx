import { ChartType } from "../../constants/constant";
import Input from "../Input/Input";
import styles from "./SideBar.module.css";
import { Button } from "primereact/button";

interface SideBarProps {
  handleClick: (type: ChartType) => void;
}
export default function SideBar({ handleClick }: SideBarProps) {
  return (
    <div className={styles.sidebar}>
      <Input />
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
       <Button
        type="button"
        label="Donut Chart"
        className={styles.buttonchart}
        onClick={() => handleClick(ChartType.Donut)}
      />
     
    </div>
  );
}
