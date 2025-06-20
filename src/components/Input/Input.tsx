import styles from "./Input.module.css";
import { Button } from "primereact/button";
import Modal from "../Modal/Modal";
import { useAppDispatch, useAppSelector } from "../../store/ChartStore";
import { openModal } from "../../store/ChartSlice";

export default function Input() {
  const dispatch = useAppDispatch();
  const chartData = useAppSelector((state) => state.chart);
  function handleModal(value: boolean) {
    dispatch(
      openModal({
        modalVisible: value,
      })
    );
  }

  return (
    <div className={styles.input}>
      <Button
        type="button"
        label="Enter Input Data"
        className={styles.buttonchart}
        onClick={() => handleModal(true)}
      />
      {chartData.modalVisible && <Modal handleModal={handleModal} />}
    </div>
  );
}
