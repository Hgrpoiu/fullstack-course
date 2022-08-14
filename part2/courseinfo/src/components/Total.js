import React from "react";
import PropTypes from "prop-types";

function Total(props) {
  let totals = props.total.reduce((prev, cur) => {
    return prev+cur.exercises;
  },0);
  return <p>Number of exercises {totals}</p>;
}

Total.propTypes = {};

export default Total;
