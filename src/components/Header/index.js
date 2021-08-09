import HeaderStyles from './Header.module.scss'

import React from 'react'
import { NavLink } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';


function Header(props) {
  const {totalPrice} = useCart()

  return (
    <header className={`d-flex justify-between align-center p-30 ${HeaderStyles.header}`}>
      <NavLink to='/react-sneackers/' className="d-flex align-center">
        <img width={40} height={40} src='img/logo.png' alt='logo' />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </NavLink>
      <ul className="d-flex">
        <li className= {HeaderStyles.cartStyle} onClick={props.onShowCart}>
          <img width={18} height={18} src="img/cart.svg" alt='cart'/>
          <span className={HeaderStyles.price}>{totalPrice} руб.</span>
        </li>
        <NavLink to='/favorites' className={HeaderStyles.favorites}>
          <img  width={18} src="img/favorites.svg" alt='favorites'/>
        </NavLink>
          <NavLink to='/orders' className={HeaderStyles.favorites}>
            <img width={18} src="img/user.svg" alt='user'/>
          </NavLink>
      </ul>
    </header>
  );
}

export default Header;
