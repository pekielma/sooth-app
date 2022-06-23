import React, {useEffect} from 'react'
import './productsOverview.scss'
import Cards from '../../components/card/card'
import AcneCreamImage from '../../images/Cream-2.png'
import vitiligioImage from '../../images/vitiligi-background.png'
import ezcemaImage from '../../images/ezcema-background.png'
import suburnImage from '../../images/suburn-4.png'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/data'


function ProductsOverview(props) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(()=>{
    dispatch(getProducts())
  }, [])
  
console.log('products', products)

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
      {
        products.map((product)=>{
          if( product.category == "women's clothing" & product.price > 10 ){
            return(
              <Cards addToCart={props.addToCart} product={product} img={product.image} title={product.title} price={product.price} />
            )
         
          } 
        })
      }
      {/* <Cards img={AcneCreamImage} title='Acne Cream' price={24.99} />
      <Cards img={vitiligioImage} title='Acne Cream' price={24.99} />
      <Cards img={ezcemaImage} title='Acne Cream' price={24.99} />
      <Cards img={suburnImage} discount={70} title='Acne Cream' price={24.99} />       */}
      </div>

      </div>
    </div>
  )
}

export default ProductsOverview
