import HeaderStyles from './Header.module.scss'

import React from 'react'
import { NavLink } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';
import logo from './logo.png'
import favorites from './favorites.svg'
import orders from './user.svg'
import cart from './cart.svg'

function Header(props) {
  const {totalPrice} = useCart()

  return (
    <header className={`d-flex justify-between align-center p-30 ${HeaderStyles.header}`}>
      <NavLink to={process.env.PUBLIC_URL + '/'} className="d-flex align-center">
        <img width={40} height={40} src={logo} alt='logo' />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </NavLink>
      <ul className="d-flex">
        <li className= {HeaderStyles.cartStyle} onClick={props.onShowCart}>
          <img width={18} height={18} src={cart} alt='cart'/>
          <span className={HeaderStyles.price}>{totalPrice} руб.</span>
        </li>
        <NavLink to='/favorites' className={HeaderStyles.favorites}>
          <img  width={18} src={favorites} alt='favorites'/>
        </NavLink>
          <NavLink to='/orders' className={HeaderStyles.favorites}>
            <img width={18} src={orders} alt='user'/>
          </NavLink>
      </ul>
    </header>
  );
}

export default Header;
