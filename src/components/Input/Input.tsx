import { InputText } from "primereact/inputtext";
import styles from "./Input.module.css";
import { Button } from "primereact/button";
import { useState } from "react";
interface DataProps {
  stateX: string;
  stateY: string;
}
export default function Input() {
  function handleSubmit(data: DataProps) {
    console.log(data);
  }
  const [stateX, setStateX] = useState<string>("");
  const [stateY, setStateY] = useState<string>("");
  return (
    <div className={styles.input}>
      <div className={styles.x_axis}>
        <p>X-axis Data (Labels)</p>
        <h6>Enter comma-seperated values</h6>
        <InputText onChange={(e) => setStateX(e.target.value)} />
      </div>

      <div className={styles.y_axis}>
        <h3>Y-axis Data (Values)</h3>
        <h6>Enter comma-seperated values</h6>
        <InputText onChange={(e) => setStateY(e.target.value)} />
      </div>
      <Button
        type="button"
        label="Submit"
        className={styles.buttonchart}
        onClick={() => handleSubmit({ stateX, stateY })}
      />
    </div>
  );
}
