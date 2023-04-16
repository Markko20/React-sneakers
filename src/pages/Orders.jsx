import React from 'react'
import Card from '../components/Card';
import axios from 'axios';

export function Orders() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [orders, setOrders] = React.useState([])

  React.useEffect(() => {
    (async() => {
      try{
        const { data } = await axios.get('http://localhost:5004/orders')
        setOrders(data.map(obj => obj.items).flat())
        setIsLoading(false)
      } catch(error){
        console.error(error)
        alert('Ошибка при запросе заказов')
      }
      
    })()
  }, [])
  
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>
      <div className="content-items d-flex">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
        <Card
          key={index}
          {...item}
          loading={isLoading}
        />
        ))}
      </div>
    </div>
  );
}
