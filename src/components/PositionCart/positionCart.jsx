import React from 'react'
import DrawerStyles from '../Drawer/Drawer.module.scss'

import AppContext from '../../context'

const PositionCart = ({ image, title, description }) => {
    const {setCart} = React.useContext(AppContext)

    return (
        <div className={DrawerStyles.emptyCart}>
              <img src={image} alt='empty-cart'/>
              <strong>{ title }</strong>
              <p>{ description }</p>
              <div>
                <button onClick={() => setCart(false)} className={DrawerStyles.greenButton}>
                  <img className={DrawerStyles.emptyArrow} src='img/back-main.svg' alt='back'/>
                  Вернуться назад
                </button>
              </div>
          </div>
    )
}

export default PositionCart;
