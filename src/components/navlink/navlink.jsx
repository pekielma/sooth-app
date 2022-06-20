import React, { useState } from "react";

function Navlink(props) {
  const [isBold, setIsBold] = useState(props.bold);

  return isBold ? (
    <a className='navlink' href={props.herf}>
      <b>{props.content}</b>
    </a>
  ) : (
    <a className='navlink' href={props.herf}>
      {props.content}
    </a>
  );
}

export default Navlink;
