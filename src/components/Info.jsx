import React from 'react'
import AppContext from '../context';

const Info = ({title, description, image}) => {
  const {setCartOpened, setIsOrderComplete} = React.useContext(AppContext)
  const onClickBtn = () => {
    console.log('afd')
    setCartOpened(false)
    setIsOrderComplete(false)
    document.location.reload();
  }
  return (
    <div className="cart-wrapper">
      <div className="cartEmpty d-flex align-center justyfy-center flex-column flex">
        <img
          width={120}
          src={image}
          alt="Empty"
          className="mb-20"
        />
        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>
        <button className="green-btn" onClick={onClickBtn}>
          <img src="/img/arrow.svg" alt="arrow" />
          Продолжить покупки
        </button>
      </div>
    </div>
  );
}

export default Info