import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { display: false, msg: "" };

let timeoutID = null;

const msgReducer = createSlice({
  name: "msgs",
  initialState,
  reducers: {
    setMsg(state, action) {
      return { display: true, msg: action.payload };
    },
    removeMsg(state, action) {
      return { display: false, msg: state.msg };
    },
  },
});

export function setNotif(msg, sec) {
  return (dispatch) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    dispatch(setMsg(msg));
    timeoutID = setTimeout(() => {
      timeoutID = null;
      dispatch(removeMsg());
    }, sec * 1000);
  };
}

export const { setMsg, removeMsg } = msgReducer.actions;
export default msgReducer.reducer;
