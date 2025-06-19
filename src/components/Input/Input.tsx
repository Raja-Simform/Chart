import { InputText } from "primereact/inputtext";
import styles from "./Input.module.css";
import { Button } from "primereact/button";
import { useRef, useState } from "react";
import { useAppDispatch } from "../../store/ChartStore";
import { addData } from "../../store/ChartSlice";

import { Toast } from "primereact/toast";

interface DataProps {
  stateX: string;
  stateY: string;
}
export default function Input() {
  const [stateX, setStateX] = useState<string>("");
  const [stateY, setStateY] = useState<string>("");
  const toastTL = useRef<Toast>(null);
  const dispatch = useAppDispatch();
  function handleSubmit(data: DataProps) {
    const dataX = data.stateX
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    const dataY = data.stateY
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "")
      .map((item) => Number(item))
      .filter((item) => !isNaN(item));

    if (dataX.length === dataY.length && dataX.length !== 0) {
      setStateX("");
      setStateY("");
      dispatch(
        addData({
          x_axis: dataX,
          y_axis: dataY,
        })
      );
      if (toastTL.current) {
        toastTL.current.show({
          severity: "success",
          summary: "Success",
          detail: "Chart data updated successfully!",
          life: 500,
        });
      }
    } else {
      if (toastTL.current) {
        toastTL.current.show({
          severity: "warn",
          summary: "Warn",
          detail: "Add Valid Data!",
          life: 500,
        });
      }
    }
  }

  return (
    <div className={styles.input}>
      <p>Enter Input Data</p>
      <div className={styles.x_axis}>
        <p>X-axis Data (Labels)</p>
        <span>Enter comma-seperated values</span>
        <InputText onChange={(e) => setStateX(e.target.value)} value={stateX} />
      </div>

      <div className={styles.y_axis}>
        <p>Y-axis Data (Values)</p>
        <span>Enter comma-seperated values</span>
        <InputText value={stateY} onChange={(e) => setStateY(e.target.value)} />
      </div>

      <Toast ref={toastTL} position="top-left" />
      <Button
        type="button"
        label="Submit"
        className={styles.buttonchart}
        onClick={() => handleSubmit({ stateX, stateY })}
      />
    </div>
  );
}
