import React from 'react'
import PropTypes from 'prop-types'

function Part(props) {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

Part.propTypes = {}

export default Part
