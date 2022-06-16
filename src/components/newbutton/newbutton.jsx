import React from 'react'
import './newbutton.scss'

function newbutton(props) {
  return (
    <a className='new-button'>
    {props.content}
    </a>
  )
}

export default newbutton
