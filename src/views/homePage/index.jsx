import React from 'react'
import './index.scss'
import handImage from '../../images/updated_Header-1-removebg-preview.png'
import ezcemaImage from '../../images/ezcema-8.png'
import Newbutton from '../../components/newbutton/newbutton'
import Shopbutton from '../../components/shopbutton/shopbutton'
// import Homecard from '../../components/homecard/homecard'

function index() {



  return (
    <div className='home-page' styles={{ backgroundImage: `url(${handImage})` }}>
    <div className='home-card-section'>
    {/* <Homecard /> */}
    <div className='home-card'>
    <Newbutton color='white' content='NEW!' />
    <div className='content'>
    <h2>All Natural Skin Remedies.</h2>
      <p>A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</p>
    </div>
      
      <Shopbutton bold={true}  content='SHOP PRODUCTS'/>
      </div>
    </div>
    <img src={ezcemaImage} className='ezcema-image' alt="" /> 
    </div>
  )
}

export default index
