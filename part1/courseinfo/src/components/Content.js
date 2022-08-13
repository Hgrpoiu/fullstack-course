import React from 'react'
import Part from './Part';
import PropTypes from 'prop-types'

function Content(props) {
    return (
        <div>
            {props.parts.map((item)=>{
                return <Part part={item.name} exercises={item.exercises}/> 
            })}
        </div>
      );
}

Content.propTypes = {}

export default Content
