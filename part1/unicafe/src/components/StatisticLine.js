import React from 'react'
import PropTypes from 'prop-types'

function StatisticLine(props) {
  return (
    <tr><td>{props.text}: {props.value}</td></tr>
  )
}

StatisticLine.propTypes = {}

export default StatisticLine
