import React from 'react'
import style from './card.module.scss'
import Shopbutton from '../shopbutton/shopbutton'
import Newbutton from '../newbutton/newbutton'


function cards(props) {
  const discountStyle = (props.price * props.discount / 100).toFixed(2)

  return (
    <div className={style.card}>
    <div className={style.image}>
    <img src={props.img} alt="" />
    <Newbutton className={style.newbutton} color='gray' content='NEW!'/>
    </div>
    <p className={style.productTitle}><b>{props.title}</b></p>
    <p className={style.productNsNatural}>All Natural Ingredients.</p>
    {!props.discount || props.discount < 0 ? <p className={style.productPrice}>${props.price}</p> :

    <p className={style.productPrice}> 
    <span className={style.afterDiscount}>${discountStyle}</span><hr className={style.hrDiscount}/><span className={style.beforeDiscount}>${props.price}</span>
    </p>
    }

    <Shopbutton addToCart={props.addToCart} product={props.product} content= 'Add to cart' bold={false} />
    </div>
  )
}

export default cards