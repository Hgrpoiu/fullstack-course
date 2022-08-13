import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function Vote(props) {
  return (
    <>
      <p>has {props.votes[props.sel]} votes</p>
      <div>
        <button onClick={props.voteHandler}>vote</button>
      </div>
    </>
  );
}

Vote.propTypes = {};

export default Vote;
