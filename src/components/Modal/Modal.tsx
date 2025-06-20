import styles from "./Modal.module.css";
import { InputText } from "primereact/inputtext";
import { useRef, useState } from "react";
import { useAppDispatch } from "../../store/ChartStore";
import { addData } from "../../store/ChartSlice";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import Preview from "../Preview/Preview";
import { ConvertDataToArray } from "../../utility/convertData";
interface ModalProps {
  handleModal: (value: boolean) => void;
  isVisible: boolean;
}
export default function Modal({ handleModal, isVisible }: ModalProps) {
  const [stateX, setStateX] = useState<string>("");
  const [stateY, setStateY] = useState<string>("");
  const [preview, setPreview] = useState<boolean>(false);
  function handlePreview(value: boolean) {
    setPreview(value);
  }
  const dispatch = useAppDispatch();
  const toastTL = useRef<Toast>(null);

  function handleSubmit() {
    const dataX: string[] = ConvertDataToArray<string>(stateX, "string");
    const dataY: number[] = ConvertDataToArray<number>(stateY, "number");

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
      {preview && (
        <Preview
          preview={preview}
          handlePreview={handlePreview}
          stateX={stateX}
          stateY={stateY}
        />
      )}
      <div className={styles.input}>
        <div className={styles.x_axis}>
          <Tooltip target=".custom-tooltip-label">
            <p>Enter comma-seperated labels</p>
          </Tooltip>
          <p>X-axis Data (Labels)</p>
          <InputText
            onChange={(e) => setStateX(e.target.value)}
            value={stateX}
            placeholder="'January', 'February', 'March', 'April', 'May', 'June', 'July'"
            className="custom-tooltip-label"
          />
        </div>

        <div className={styles.y_axis}>
          <Tooltip target=".custom-tooltip-value">
            <p>Enter comma-seperated values</p>
          </Tooltip>
          <p>Y-axis Data (Values)</p>
          <InputText
            value={stateY}
            onChange={(e) => setStateY(e.target.value)}
            placeholder="65, 59, 80, 81, 56, 55, 40"
            className="custom-tooltip-value"
          />
        </div>
      </div>

      <Toast ref={toastTL} position="top-center" />
      <div className={styles.modalButton}>
        <Button
          type="button"
          label="Submit"
          className={styles.buttonchart}
          onClick={() => handleSubmit()}
        />
        <Button
          type="button"
          label="Preview"
          className={styles.buttonchart}
          onClick={() => handlePreview(true)}
        />
      </div>
    </Dialog>
  );
}
