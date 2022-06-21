import React, {useEffect, useState} from 'react'
import './productsOverview.scss'
import Cards from '../../components/card/card'
import AcneCreamImage from '../../images/Cream-2.png'
import vitiligioImage from '../../images/vitiligi-background.png'
import ezcemaImage from '../../images/ezcema-background.png'
import suburnImage from '../../images/suburn-4.png'
import axios from 'axios'

function ProductsOverview() {
  const [data, setData] = useState()

const fetchProducts = async () => {
  try{
    let response = await axios.get('https://fakestoreapi.com/products');
    window.localStorage.setItem('MY_DATA', JSON.stringify(response.data))

    const produscts = window.localStorage.getItem('MY_DATA')
  if(produscts) setData(JSON.parse(produscts))
    console.log('products', data)
   
    
    
  }catch (error){
    console.log(error)
  }
}

// const produscts = window.localStorage.getItem('MY_DATA')
//   if(produscts) setLocalData(JSON.parse(produscts))
//   console.log('products', localData)


useEffect(() => {
  fetchProducts()
  
  
  
}, [data])


// let i = 0;
// const intervalId = setInterval(function () {
//   if (i < 2) {
//     console.log(i);
//   } else {
//     console.log('Pop!');
//     clearInterval(intervalId);
//   }
 
//   i++;
// }, 1000);


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

export default ProductsOverview
