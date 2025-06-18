import styles from './Chart.module.css'
interface ChartProps{
  type:string;
} 
export default function Chart({type}:ChartProps) {
  return <div className={styles.chart}>
    {type}
  </div>;
}
