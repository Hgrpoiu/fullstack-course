import React from 'react'
import PropTypes from 'prop-types'

function Total(props) {
    let totals=0;
    props.total.forEach((item)=>{
        totals=totals+item.exercises;
    });
  return (
    <p>Number of exercises {totals}</p>
  )
}

Total.propTypes = {}

export default Total
