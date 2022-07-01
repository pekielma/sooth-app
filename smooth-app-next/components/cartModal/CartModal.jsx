import ReactDom from "react-dom";
import style from  "./cartModal.module.scss";

function CarModal(props) {
  if (!props.open) return null;

  return ReactDom.createPortal(
    <>
      <div className={style.overlayStyles}>
        <div className={style.modalStyles}>
          <div className={style.cartTitle}>
            <h2>Your Cart</h2>
            <div className='exit' onClick={props.openModal}>
              <b>X</b>
            </div>
          </div>
          <div className={style.cartListItems}>
            {props.cart.map((item, index) => {
              return (
                <div key={index} className={style.cartItem}>
                  <img
                    className={style.itemImage}
                    src={item.image}
                    alt={item.title}
                  />
                  <div className={style.itemInfo}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default CarModal;
