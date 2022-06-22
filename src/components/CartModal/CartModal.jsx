import ReactDom from 'react-dom'
import './CartModal.scss'
import AcneCreamImage from '../../images/Cream-2.png'

function CarModal(props) {

 let cart = [
    {
        id: 1,
        title:'Acne Cream',
        price:'...',
        category:'...',
        description:'All Natural Ingredients.',
        image: AcneCreamImage
    },
    {
      id:2,
      title:'Acne Cream',
      price:'...',
      category:'...',
      description:'All Natural Ingredients.',
      image:AcneCreamImage
  },
  {
    id:3,
    title:'Acne Cream',
    price:'24.99',
    category:'...',
    description:'All Natural Ingredients.',
    image:AcneCreamImage
}
  ]

    if (!props.open) return null

  return ReactDom.createPortal(
    <>
    <div className='overlay_styles'>
    <div className='MODAL_STYLES'> 
    <div className='cart-title'>
      <h2>Your Cart</h2>
    </div>
    <div className='cart-list-items'>
    {
      cart.map((item) =>{
        return (
          <div className='cart-item'>
            <img className='item-image' src={item.image} alt={item.title} />
            <div className='item-info'>
            <p>{item.title}</p>
            <p>{item.description}</p>
            </div>
          </div>
        );
      })
    }
    </div>



    </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default CarModal

