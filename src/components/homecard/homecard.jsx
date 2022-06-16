import React from 'react'
import './homecard.scss'
import Newbutton from '../newbutton/newbutton'
import Shopbutton from '../shopbutton/shopbutton'

function homecard() {
  return (
    <div className='home-card'>
    <Newbutton content='NEW!' />
    <div className='content'>
    <h2>All Natural Skin Remedies.</h2>
      <p>A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</p>
    </div>
      
      <Shopbutton content='SHOP PRODUCTS'/>
      </div>
  )
}

export default homecard