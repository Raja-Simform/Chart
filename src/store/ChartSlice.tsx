import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface addDataPlayload {
  x_axis: Array<string>;
  y_axis: Array<number>;
}

const chartSlice = createSlice({
  name: "Chart",
  initialState: {
    y_axis: [] as Array<number>,
    x_axis: [] as Array<string>,
  },

  reducers: {
    addData(state, action: PayloadAction<addDataPlayload>) {
      state.x_axis = action.payload.x_axis;
      state.y_axis = action.payload.y_axis;
    },
  },
});
export const { addData } = chartSlice.actions;
export default chartSlice.reducer;
