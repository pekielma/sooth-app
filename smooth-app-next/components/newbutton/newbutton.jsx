import React from 'react'
import style from './newbutton.module.scss'

function newbutton(props) {
  const buttonColor = props.color
  
  return (
      buttonColor === 'white' ?  (
        <a className={style.white}>
        {props.content}
        </a>
      ) : (
        <a className={style.gray}>
        {props.content}
        </a>
      )
  )
}

export default newbutton
