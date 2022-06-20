import ReactDom from 'react-dom'
import './CartModal.scss'

function CarModal(props) {

    if (!props.open) return null

  return ReactDom.createPortal(
    <>
    <div className='overlay_styles'>
    <div className='MODAL_STYLES'> CartModal</div>
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default CarModal

