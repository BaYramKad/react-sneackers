import React from 'react'
import { NavLink } from 'react-router-dom'
import styleItems from './PositionItems.module.scss'
import comeBack from './back-main.svg'

export const PositionItems = ({ image, title, description }) => {
    return (
        <div className={styleItems.emptyCart}>
              <img src={image} alt='empty-cart'/>
              <strong>{ title }</strong>
              <p>{ description }</p>
              <div>
                  <NavLink to={process.env.PUBLIC_URL + '/'}>
                    <button className={styleItems.greenButton}>
                        <img className={styleItems.emptyArrow} src={comeBack} alt='back'/>
                        Вернуться назад
                    </button>
                  </NavLink>
              </div>
          </div>
    )
}