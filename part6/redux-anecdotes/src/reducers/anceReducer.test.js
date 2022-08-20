import deepFreeze from "deep-freeze";
import anecdoteReducer from "./anceReducer";

describe("Basic func testing", () => {
  let state;

  test("Voting", () => {
    state = [{ ancedote: "lalala", id: 124124, votes: 0 }];

    deepFreeze(state);
    const newState = anecdoteReducer(state, { type: "VOTE", data: 124124 });

    expect(newState).toEqual([{ ancedote: "lalala", id: 124124, votes: 1 }]);
  });
});
