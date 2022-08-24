import blogReducer from "./reducers/blogReducer";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer"
import msgReducer from "./reducers/msgReducer";

const store = configureStore({
  reducer: { blogs: blogReducer, user: userReducer, msgs: msgReducer },
});

export default store;
