import React from 'react'
import AppContext from '../context';

const Info = ({title, description, image}) => {
  const {setCartOpened} = React.useContext(AppContext)
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
        <button className="green-btn" onClick={() => setCartOpened(false)}>
          <img src="/img/arrow.svg" alt="arrow" />
          Вернуться назад
        </button>
      </div>
    </div>
  );
}

export default Info