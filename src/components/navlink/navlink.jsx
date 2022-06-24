import React, { useState } from "react";
import './navlink.scss'

function Navlink(props) {
  const [isBold, setIsBold] = useState(props.bold);
  const [passFunction, setPassFunction] = useState(props.passFunction);

  return isBold ? (
    passFunction ? (
      <a onClick={props.openModal} className='navlink' href={props.herf}>
     <b>{props.content}</b>
    </a>
    ) : (
      <a className='navlink' href={props.herf}>
      <b>{props.content}</b>
    </a>
    )
   
  ) : (
      <a className='navlink' href={props.herf}>
       {props.content}
    </a>
  );
}

export default Navlink;
