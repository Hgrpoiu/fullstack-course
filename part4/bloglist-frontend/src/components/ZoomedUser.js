import React from 'react'
import PropTypes from 'prop-types'

function ZoomedUser(props) {
  return (
    <div className='zoomeduser'>
        <h1>{props.name}</h1>
        <h3>Added blogs</h3>
        <ul>
            {props.blogList.map((b)=>{
                return <li key={b}>{b.title}</li>
            })}
        </ul>
    </div>
  )
}

ZoomedUser.propTypes = {}

export default ZoomedUser
