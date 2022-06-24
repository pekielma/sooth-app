import ReactDom from "react-dom";
import "./CartModal.scss";

function CarModal(props) {
  if (!props.open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay_styles">
        <div className="MODAL_STYLES">
          <div className="cart-title">
            <h2>Your Cart</h2>
            <div className='exit' onClick={props.openModal}>
              <b>X</b>
            </div>
          </div>
          <div className="cart-list-items">
            {props.cart.map((item, index) => {
              return (
                <div key={index} className="cart-item">
                  <img
                    className="item-image"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="item-info">
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
