import { createSlice, current } from "@reduxjs/toolkit";
import { getAll, postAnec, putAnecV } from "../services/ancedotes";
const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const anceSlice = createSlice({
  name: "ances",
  initialState: [],
  reducers: {
    stateVote(state, action) {
      const changingAnce = state.find((ance) => ance.id === action.payload);

      const votes = changingAnce.votes + 1;
      const changedAnce = { ...changingAnce, votes };
      return state.map((ance) => {
        return ance.id === action.payload ? changedAnce : ance;
      });
    },
    addAnce(state, action) {
      const ance = action.payload;
      return state.concat(ance);
    },
    changeAnce(state, action) {
      const index = state.findIndex((a) => {
        return a.id === action.payload.id;
      });

      state[index] = action.payload;
    },
    setAnces(state, action) {
      return action.payload;
    },
  },
});

export function initAnces() {
  return async (dispatch) => {
    dispatch(setAnces(await getAll()));
  };
}

export function createAnce(ance) {
  return async (dispatch) => {
    dispatch(addAnce(await postAnec(ance)));
  };
}

export function voteAnec(ance) {
  return async (dispatch) => {
    dispatch(changeAnce(await putAnecV(ance)));
  };
}

export const { stateVote, addAnce, setAnces,changeAnce } = anceSlice.actions;
export default anceSlice.reducer;
