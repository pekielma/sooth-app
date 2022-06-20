import React from 'react'
import './productsOverview.scss'
import Cards from '../../components/card/card'
import AcneCreamImage from '../../images/Cream-2.png'
import vitiligioImage from '../../images/vitiligi-background.png'
import ezcemaImage from '../../images/ezcema-background.png'
import suburnImage from '../../images/suburn-4.png'

function productsOverview() {
  return (
    <div className='products-overview'>
      <div className='products-title'>
      <hr />
          <h2>Solutions for all skin health</h2>
          <p>Explore our innovative skincare products</p>
          <hr />
      </div>
      <div className='products-section'>
      <div className='links'>
          <a href="">Most Popular</a>
          <a href="">Shop all products</a>
      </div>
      <div className='cards'>
      <Cards img={AcneCreamImage} title='Acne Cream' price={24.99} />
      <Cards img={vitiligioImage} title='Acne Cream' price={24.99} />
      <Cards img={ezcemaImage} title='Acne Cream' price={24.99} />
      <Cards img={suburnImage} discount={30} title='Acne Cream' price={24.99} />      
      </div>

      </div>
    </div>
  )
}

export default productsOverview
