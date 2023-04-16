import Header from "./components/Header.js";
import Drawer from "./components/drawer/index.js";
import React from 'react'
import axios from "axios";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import AppContext from "./context.js";
import {Orders} from './pages/Orders.jsx'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() =>{
    async function fetchData(){
      try{
        const cartResponse = await axios.get(' http://localhost:5004/cart')
        const favoritesResponse = await axios.get(' http://localhost:5004/favorites')
        const itemReasponse = await axios.get(' http://localhost:5004/items')

        setIsLoading(false)
        
        setFavorites(favoritesResponse.data)
        setCartItems(cartResponse.data)
        setItems(itemReasponse.data)
      } catch(error){
        console.error(error)
        alert('Ошибка при запросе данных ;(')
      }
    }
    fetchData()
  }, [])

  const onAddToCart = async(obj) => {
    try{
      if(cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
        await axios.delete(`http://localhost:5004/cart/${obj.id}`, obj)
      } else{
        setCartItems(prev => [...prev, obj])
        await axios.post('http://localhost:5004/cart', obj)
      }
    }catch(error){
      console.error(error)
      alert('Не удалось добавить в корзину')
    }
    
  }

  const onAddToFavorite = async(obj) => {
    try {
      if(favorites.find(favObj => Number(favObj.id) === Number(obj.id))){
        axios.delete(`http://localhost:5004/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else{
        const { data } = await axios.post('http://localhost:5004/favorites', obj)
        setFavorites((prev) => [...prev, data])
      }
    } catch(error){
      console.error(error)
      alert('Не удалось добавить в избранное')
    }
  }

  const onRemoveItem = (id) =>{
    try {
      setCartItems(prev => prev.filter(item => item.id !== id))
      axios.delete(`http://localhost:5004/cart/${id}`)
    } catch (error) {
      console.error(error)
      alert('Ошибка при удалении товара')
    }
  }

  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  const isItemFavorited = (id) => {
    return favorites.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
        onAddToCart,
        isItemFavorited
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
          />

        <Header
          onClickCard={() => {
            setCartOpened(true);
          }}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />

          <Route path="favorites" element={<FavoritesPage />} />

          <Route path="orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
