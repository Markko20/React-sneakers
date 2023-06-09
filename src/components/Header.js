import { Link } from "react-router-dom";
import React from 'react'
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart()

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to ='/'>
        <div className="d-flex align-center">
            <img width={40} height={40} src="img/logo.png" alt="Logotype" />
            <div className="headerInfo ml-10">
              <h3 className="text-uppercase">react sneakers</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
        </div>
      </Link>
      <ul className="align-center d-flex">
        <li className="mr-30 d-flex align-center cu-p" onClick={props.onClickCard}>
          <img
            className="mr-10"
            width={18}
            height={18}
            src="img/cart.svg"
            alt="Cart"
          />
          <span>{totalPrice} руб</span>
        </li>
        <li className="cu-p mr-30">
          <Link to = "/favorites">
            <img src="img/heart.svg" alt="Favorite" />
          </Link>
        </li>

        <li>
          <Link to = '/orders'>
            <img src="img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header