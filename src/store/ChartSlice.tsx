import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface addDataPlayload {
  x_axis: Array<string>;
  y_axis: Array<number>;
}
interface initialStateType {
  y_axis: Array<number>;
  x_axis: Array<string>;
}
const initialState: initialStateType = {
  y_axis: [],
  x_axis: [],
};

const chartSlice = createSlice({
  name: "Chart",
  initialState: initialState,

  reducers: {
    addData(state, action: PayloadAction<addDataPlayload>) {
      state.x_axis = action.payload.x_axis;
      state.y_axis = action.payload.y_axis;
    },
  },
});
export const { addData } = chartSlice.actions;
export default chartSlice.reducer;
