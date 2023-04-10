import styles from './Card.module.scss'
console.log(styles)

function Card(props){

  const onClickBtn = () => {
    alert('123')
  }


  return(
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button className={styles.button} onClick={onClickBtn}>
          <img src="img/plus.svg" width={11} height={11} alt="Sneakers" />
        </button>
      </div>
    </div>
  )
}

export default Card;
