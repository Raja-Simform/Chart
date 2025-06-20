import styles from "./Modal.module.css";
import { InputText } from "primereact/inputtext";
import { useRef, useState } from "react";
import { useAppDispatch } from "../../store/ChartStore";
import { addData } from "../../store/ChartSlice";
import { Button } from "primereact/button";
interface DataProps {
  stateX: string;
  stateY: string;
}
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
interface ModalProps {
  handleModal: (value: boolean) => void;
  isVisible: boolean;
}
export default function Modal({ handleModal, isVisible }: ModalProps) {
  const [stateX, setStateX] = useState<string>("");
  const [stateY, setStateY] = useState<string>("");

  const dispatch = useAppDispatch();
  const toastTL = useRef<Toast>(null);

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
          life: 3000,
        });
      }
      setTimeout(() => {
        handleModal(false);
      }, 500);
    } else {
      if (toastTL.current) {
        toastTL.current.show({
          severity: "warn",
          summary: "Warn",
          detail: "Add Valid Data!",
          life: 1000,
        });
      }
    }
  }

  return (
    <Dialog
      header="Enter Data"
      visible={isVisible}
      className={styles.modal}
      onHide={() => {
        if (!isVisible) return;
        handleModal(false);
      }}
    >
      <div className={styles.input}>
        <div className={styles.x_axis}>
          <p>X-axis Data (Labels)</p>
          <p>Enter comma-seperated values</p>
          <InputText
            onChange={(e) => setStateX(e.target.value)}
            value={stateX}
            placeholder="'January', 'February', 'March', 'April', 'May', 'June', 'July'"
          />
        </div>

        <div className={styles.y_axis}>
          <p>Y-axis Data (Values)</p>
          <p>Enter comma-seperated values</p>
          <InputText
            value={stateY}
            onChange={(e) => setStateY(e.target.value)}
            placeholder="65, 59, 80, 81, 56, 55, 40"
          />
        </div>
      </div>

      <Toast ref={toastTL} position="top-center" />
      <div className={styles.modalButton}>
        <Button
          type="button"
          label="Submit"
          className={styles.buttonchart}
          onClick={() => handleSubmit({ stateX, stateY })}
        />
      </div>
    </Dialog>
  );
}
