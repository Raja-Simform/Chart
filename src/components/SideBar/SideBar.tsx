import styles from "./SideBar.module.css";

import { Button } from "primereact/button";
interface SideBarProps{
  handleClick:(type:string)=>void;
}
export default function SideBar({handleClick}:SideBarProps) {
  return (
    <div className={styles.sidebar}>
      <h2>Choose Graph from below</h2>
      <Button type="button" label="Bar Chart" className={styles.buttonchart} onClick={()=>handleClick("bar")} />
      <Button type="button" label="Line Chart" className={styles.buttonchart} onClick={()=>handleClick("line")}/>
      <Button type="button" label="Area Chart" className={styles.buttonchart} onClick={()=>handleClick("area")}/>
    </div>
  );
}
