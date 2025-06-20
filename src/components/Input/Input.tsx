import styles from "./Input.module.css";
import { Button } from "primereact/button";
import Modal from "../Modal/Modal";

import { useState } from "react";

export default function Input() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function handleModal(value: boolean) {
    setIsVisible(value);
  }

  return (
    <div className={styles.input}>
      <Button
        type="button"
        label="Enter Input Data"
        className={styles.buttonchart}
        onClick={() => handleModal(true)}
      />
      {isVisible && <Modal handleModal={handleModal} isVisible={isVisible} />}
    </div>
  );
}
