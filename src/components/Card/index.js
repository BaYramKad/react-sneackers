import CardStyles from './Card.module.scss'
import React from 'react'

import AppContext from '../../context'
import ContentLoader from "react-content-loader"

function Card({id, url, title, price, onPlus, onFavorites, isLoading = false, favorited = false} ) {
  const { changeActiveAddToCart} = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = {url, title, price, id, parentId: id};

  const onClickPlus = () => {
    onPlus(obj)
  }

  const onClickFavorites = () => {
    onFavorites(obj)
    setIsFavorite(!isFavorite)
  }
  
  return (
    <div className={CardStyles.card}>
        {
          isLoading ? 
            <ContentLoader 
              speed={2}
              width={155}
              height={240}
              viewBox="0 0 150 240"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb">
              <rect x="0" y="0" rx="10" ry="10" width="150" height="135" /> 
              <rect x="0" y="150" rx="7" ry="7" width="150" height="15" /> 
              <rect x="0" y="173" rx="7" ry="7" width="90" height="15" /> 
              <rect x="-1" y="212" rx="7" ry="7" width="80" height="24" /> 
              <rect x="117" y="205" rx="7" ry="7" width="32" height="32" />
            </ContentLoader> : 
          <div>
            <div className={CardStyles.favorite}>
               {onFavorites && <img onClick={onClickFavorites} src={ isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.svg"} alt="favorite" />}
              </div>
              <img width={133} height={112} src={url} alt="Sneakers" />
              <h5>{title}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>{price} руб.</b>
                </div>
                { onPlus && <button className={CardStyles.button} onClick={onClickPlus}>
                    <img src={ changeActiveAddToCart(id) ? 'img/btn-checked.svg' : 'img/plus.svg'}  alt="Plus" />
                  </button> }
            </div>
          </div>
        }
    </div>
  );
}

export default Card;


