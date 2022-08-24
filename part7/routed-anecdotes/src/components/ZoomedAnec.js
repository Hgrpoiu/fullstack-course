import React from 'react'
import PropTypes from 'prop-types'

function ZoomedAnec({anec}) {
  return (<div>
    <h1>{anec.content} by {anec.author}</h1>
    <h3>has {anec.votes} votes</h3></div>
  )
}

ZoomedAnec.propTypes = {}

export default ZoomedAnec
