import { Dialog } from "primereact/dialog";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "./Preview.module.css";
import { ConvertDataToArray } from "../../utility/convertData";

interface PreviewProps {
  handlePreview: (value: boolean) => void;
  preview: boolean;
  stateX: string;
  stateY: string;
}
export default function Preview({
  preview,
  handlePreview,
  stateX,
  stateY,
}: PreviewProps) {
  const dataX = ConvertDataToArray(stateX, "string");
  const dataY = ConvertDataToArray(stateY, "number");

  const chartData = dataX.map((x, index) => ({
    "x-axis": x,
    "y-axis": dataY[index],
  }));
  return (
    <Dialog
      header="Preview Data"
      visible={preview}
      className={styles.preview}
      onHide={() => {
        if (!preview) return;
        handlePreview(false);
      }}
    >
      <DataTable
        value={chartData}
        paginator
        showGridlines
        rows={10}
        className={styles.table}
      >
        <Column field="x-axis" header="X-Axis"></Column>
        <Column field="y-axis" header="Y-Axis"></Column>
      </DataTable>
    </Dialog>
  );
}
