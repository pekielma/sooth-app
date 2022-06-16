import React from 'react'
import './index.scss'
import handImage from '../../images/updated_Header-1-removebg-preview.png'
import ezcemaImage from '../../images/ezcema-8.png'
import Homecard from '../../components/homecard/homecard'

function index() {



  return (
    <div className='home-page' styles={{ backgroundImage: `url(${handImage})` }}>
    <div className='home-card-section'>
    <Homecard />
    </div>
    <img src={ezcemaImage} className='ezcema-image' alt="" /> 
    </div>
  )
}

export default index
