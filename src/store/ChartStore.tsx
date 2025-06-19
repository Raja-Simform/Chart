import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "./ChartSlice";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
export const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
