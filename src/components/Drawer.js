import axios from 'axios'
import AppContext from '../context'
import Info from './Info'
import React from 'react'

const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms)
})

function Drawer({onClose, items = [], onRemove}) {
  const {cartItems, setCartItems} = React.useContext(AppContext)
  const [orderId,setOrderId] = React.useState(null)
  const [isOrderComplete,setIsOrderComplete] = React.useState(false)
  const [isLoading,setIsLoading] = React.useState(false)

  const onClickOrder = async() => {
    try{
      setIsLoading(true)
      const {data} = await axios.post('http://localhost:5004/orders', {
        items:cartItems,
        id:orderId
      })
      
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`http://localhost:5004/cart/${item.id}`);
        await delay(100);
      }

      setOrderId(data.id)
      setIsOrderComplete(true)
      setCartItems([])
    } catch(error){
      alert('Oшибка при создании заказа :(')
      console.log(error)
    }
    setIsLoading(false);  
  }
  
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
                <div
                  key={obj.id}
                  className="cart-item d-flex align-center mb-20"
                >
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

              <button className="green-btn" onClick={onClickOrder} disabled={isLoading}>
                Оформить заказ <img src="img/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пуста"}
            description={
              isOrderComplete
                ? `Ваш заказ №${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, что бы сделать заказ"
            }
            image={
              isOrderComplete ? "img/complete-order.jpg" : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
