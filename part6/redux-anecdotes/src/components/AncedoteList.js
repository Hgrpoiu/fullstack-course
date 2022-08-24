import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { initAnces, setAnces, stateVote } from "../reducers/anceReducer";
import { useDispatch, useSelector } from "react-redux";
import { removeMsg, setMsg, setNotif } from "../reducers/msgReducer";
import {voteAnec} from "../reducers/anceReducer"

function AncedoteList(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initAnces());
  }, [dispatch]);

  const anecdotes = useSelector((state) => {
    return state.ance
      .map((a) => {
        const content = a.content;
        if (content.toLowerCase().includes(state.filter)) {
          return a;
        }
      })
      .filter((a) => {
        if (a !== null) {
          return a;
        }
      });
  });
  const vote = (anecdote) => {
    dispatch(setNotif(`${anecdote.content} was voted`,5));
    dispatch(voteAnec(anecdote));
  };

  if (!anecdotes) {
    return <div></div>;
  }

  return (
    <>
      {anecdotes
        .slice()
        .sort((ance1, ance2) => {
          return ance2.votes - ance1.votes;
        })
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </>
  );
}

AncedoteList.propTypes = {};

export default AncedoteList;
