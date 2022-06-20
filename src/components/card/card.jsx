import React from 'react'
import './card.scss'
import Shopbutton from '../shopbutton/shopbutton'
import Newbutton from '../newbutton/newbutton'


function cards(props) {
  const discountStyle = (props.price * props.discount / 100).toFixed(2)
  

  return (
    <div className='card'>
    <div className='image'>
    <img src={props.img} alt="" />
    <Newbutton className='newbutton' color='gray' content='NEW!'/>
    </div>
    <p className='product-title'><b>{props.title}</b></p>
    <p className='product-is-natural'>All Natural Ingredients.</p>
    {!props.discount || props.discount < 0 ? <p className='product-price'>${props.price}</p> :

    <p className='product-price'> 
    <span className='after-discount'>${discountStyle}</span><hr className='hr-discount'/><span className='before-discount'>${props.price}</span>
    </p>
    }
    

    <Shopbutton content= 'Add to cart' bold={false} />
    </div>
  )
}

export default cards