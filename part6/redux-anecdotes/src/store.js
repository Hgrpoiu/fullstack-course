import { configureStore } from "@reduxjs/toolkit";
import anceReducer from "./reducers/anceReducer";
import filterReducer from "./reducers/filterReducer";
import msgReducer from "./reducers/msgReducer"

const store = configureStore({
  reducer: {
    ance: anceReducer,
    msg:msgReducer,
    filter:filterReducer
  },
});

export default store;
