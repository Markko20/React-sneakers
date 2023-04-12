function Drawer({onClose, items = [], onRemove}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex align-center justify-between">
          Корзина{" "}
          <img
            width={32}
            height={32}
            className="remove-btn cu-p"
            src="img/btn-remove.svg"
            alt="remove"
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column cart-items">
            <div className="items">
            {items.map((obj) => (
              <div className="cart-item d-flex align-center mb-20">
                <img
                  className="mr-20"
                  width={70}
                  height={70}
                  src={obj.imageUrl}
                  alt=""
                />
                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} руб</b>
                </div>
                <img
                  width={32}
                  height={32}
                  className="remove-btn"
                  src="img/btn-remove.svg"
                  alt="remove"
                  onClick={() => onRemove(obj.id)}
                />
              </div>
            ))}
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
        ) : (
          <div className="cartEmpty d-flex align-center justyfy-center flex-column flex">
            <img
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
              alt="Empty"
              className="mb-20"
            />
            <h2>Корзина пуста</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, что бы сделать заказ
            </p>
            <button className="green-btn" onClick={onClose}>
              <img src="/img/arrow.svg" alt="arrow"/>
              Вернуться назад
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Drawer;
