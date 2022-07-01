import React from 'react'
import style from './index.module.scss'
import handImage from '../public/images/updated_Header-1-removebg-preview.png'
import ezcemaImage from '../public/images/ezcema-8.png'
import Newbutton from '../components/newbutton/newbutton'
import Shopbutton from '../components/shopbutton/shopbutton'
import Navbar from '../components/navbar/navbar'
import ProductsOverview from '../components/productsOverview/productsOverview'
// import Homecard from '../../components/homecard/homecard'

function index() {


  return (
    <>
      <Navbar />
    <div className={ style.homePage } styles={{ backgroundImage: `url(${handImage})` }}>
    <div className={style.homeCardSection}>
    {/* <Homecard /> */}
    <div className={style.homeCard}>
    <Newbutton color='white' content='NEW!' />
    <div className={style.content}>
    <h2>All Natural Skin Remedies.</h2>
      <p>A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</p>
    </div>
      
      <Shopbutton bold={true}  content='SHOP PRODUCTS'/>
      </div>
    </div>
    <img src={ezcemaImage.src} className={style.ezcemaImage} alt="me" /> 
    </div>
    <ProductsOverview />
    </>
  )
}

export default index
