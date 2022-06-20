import React from 'react'
import './newbutton.scss'

function newbutton(props) {
  const style = props.color


  return (
    <a className={style}>
    {props.content}
    </a>
  )
}

export default newbutton
