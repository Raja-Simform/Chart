import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface addDataPlayload {
  x_axis: Array<string>;
  y_axis: Array<number>;
}
interface openModalPlayload {
  modalVisible: boolean;
}
const chartSlice = createSlice({
  name: "Chart",
  initialState: {
    y_axis: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    x_axis: [
      "South Korea",
      "Canada",
      "United Kingdom",
      "Netherlands",
      "Italy",
      "France",
      "Japan",
      "United States",
      "China",
      "Germany",
    ],
    modalVisible: false,
  },

  reducers: {
    addData(state, action: PayloadAction<addDataPlayload>) {
      state.x_axis = action.payload.x_axis;
      state.y_axis = action.payload.y_axis;
    },
    openModal(state, action: PayloadAction<openModalPlayload>) {
      state.modalVisible = action.payload.modalVisible;
    },
  },
});
export const { addData, openModal } = chartSlice.actions;
export default chartSlice.reducer;
