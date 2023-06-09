import React from 'react'
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from '../../context';


function Card({
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
  id,
  loading = false,
}) {
  const {isItemAdded, isItemFavorited} = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price, id });
  };

  const onClickFavorite = () => {
    onFavorite({ imageUrl, title, price, id });
    setIsFavorite(!isFavorite);
    isItemFavorited()
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={232}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="150" height="130" />
          <rect x="0" y="167" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            {onFavorite && <img
              src={isItemFavorited(id) ? "img/liked.svg" : "/img/unliked.svg"}
              alt="unliked"
            />}
          </div>
          <img width={133} height={112} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price}</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? "img/btn-checked.svg" : "/img/btn-plus.svg"
                }
                alt="Sneakers"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
