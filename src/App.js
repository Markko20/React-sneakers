import Card from "./components/Card";
import Header from "./components/Header.js";
import Drawer from "./components/Drawer.js";
import React from 'react'
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() =>{
    axios.get('https://64356257537112453fd4d118.mockapi.io/items').then(res => {
      setItems(res.data)
    })
    axios.get('https://64356257537112453fd4d118.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://64356257537112453fd4d118.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://64356257537112453fd4d118.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) =>{
    axios.delete(`https://64356257537112453fd4d118.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
    
  }

  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value)
  }


  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove = {onRemoveItem}/>
      )}
      <Header
        onClickCard={() => {
          setCartOpened(true);
        }}
      />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
          </h1>
          <div className="serch-block d-flex">
            <img src="img/search.svg" alt="Search" />
            {searchValue && <img width={32} height={32} className="remove-btn cu-p clear" src="img/btn-remove.svg" alt="clear" onClick = {() => setSearchValue('')}/>}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
              type="text"
            />
          </div>
        </div>
        <div className="content-items d-flex">
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
