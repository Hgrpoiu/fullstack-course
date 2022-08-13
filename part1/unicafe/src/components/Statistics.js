import React from "react";
import PropTypes from "prop-types";
import StatisticLine from "./StatisticLine";

function Statistics(props) {
  const total = props.good + props.bad + props.neutral;

  if (total === 0) {
    return <div>No feedback given.</div>;
  } else {
    return (
      <table>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine
          text="average"
          value={(props.good - props.bad) / total}
        />
        <StatisticLine text="positive" value={props.good / total} />
      </table>
    );
  }
}

Statistics.propTypes = {};

export default Statistics;
