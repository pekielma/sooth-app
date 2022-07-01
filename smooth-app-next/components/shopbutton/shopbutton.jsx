import React, {useState} from 'react'
import style from './shopbnutton.module.scss'
import { FaShoppingCart } from 'react-icons/fa'

import { GrInstallOption } from 'react-icons/gr'

<GrInstallOption />

function Shopbuton(props) {
  const [isBold] = useState(props.bold);

  return isBold ? (
    <a className={style.boldButton} href={props.herf}>
      <b>{props.content}</b>
    </a>
  ) : (
    <a onClick={() => props.addToCart(props.product)} className={style.notBoldButton} href={props.herf}>
    <FaShoppingCart className={style.cartIcon} /><span>{props.content}</span>
    </a>
  );
  
}

export default Shopbuton