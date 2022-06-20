import React, {useState} from 'react'
import './shopbnutton.scss'
import { FaShoppingCart } from 'react-icons/fa'

function Shopbuton(props) {
  const [isBold, setIsBold] = useState(props.bold);


  return isBold ? (
    <a className='bold-button' href={props.herf}>
      <b>{props.content}</b>
    </a>
  ) : (
    <a className='not-bold-button' href={props.herf}>
    <FaShoppingCart className='cart-icon' /><span>{props.content}</span>
    </a>
  );
}

export default Shopbuton