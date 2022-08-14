import React from 'react'
import PropTypes from 'prop-types'
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

function Course(props) {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total total={props.course.parts} />
    </div>
  )
}

Course.propTypes = {}

export default Course
