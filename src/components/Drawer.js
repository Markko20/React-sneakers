function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex align-center justify-between">
          Корзина{" "}
          <img
            width={32}
            height={32}
            className="remove-btn cu-p"
            src="img/btn-remove.svg"
            alt="remove"
          />
        </h2>

        <div className="items">
          <div className="cart-item d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="img/sneakers/1.jpg"
              alt=""
            />
            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12999 руб</b>
            </div>
            <img
              width={32}
              height={32}
              className="remove-btn"
              src="img/btn-remove.svg"
              alt="remove"
            />
          </div>
          <div className="cart-item d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="img/sneakers/2.jpg"
              alt=""
            />

            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12999 руб</b>
            </div>
            <img
              width={32}
              height={32}
              className="remove-btn"
              src="img/btn-remove.svg"
              alt="remove"
            />
          </div>
        </div>

        <div className="cart-total__block">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб</b>
            </li>
          </ul>

          <button className="green-btn">
            Оформить заказ <img src="img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
