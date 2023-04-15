import Card from "../components/Card";
import AppContext from "../context";
import React from 'react'

function FavoritesPage() {
  const {favorites, onAddToFavorite, onAddToCart} = React.useContext(AppContext)

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
      </div>
      <div className="content-items d-flex">
        {favorites.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onPlus={(obj) => onAddToCart(obj)}
            favorited = {true}
            onFavorite = {onAddToFavorite}
            id = {item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;