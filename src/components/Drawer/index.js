import React from 'react'

import AppContext from '../../context';
import axios from 'axios'

import DrawerStyles from './Drawer.module.scss'
import PositionCart from '../PositionCart/positionCart';

import { useCart } from '../../hooks/useCart';

import remove from './btn-remove.svg'
import active from './order-active.jpg'
import curtain from './empty-curtain.jpg'
import arrow from './arrow.svg'

import sneakers from '../Card/2.jpg'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function Drawer({ onCloseCart, removeCard, cartItems, isCart}) {

  const {totalPrice, percentPrice} = useCart()
  const {setCartItems} = React.useContext(AppContext) 
  const [isOrder, setOrder] = React.useState(false)
  const [orders, setOrders] = React.useState([])

  const changeCart = async () => {
    try {
      const {data} = await axios.post('https://60d5a9d3943aa60017768b17.mockapi.io/orders', { items: cartItems })
      setOrders(data)
      setOrder(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const element = cartItems[i];
        await axios.delete(`https://60d5a9d3943aa60017768b17.mockapi.io/cartItem/${element.id}`)
        await delay(2000)
      }
    } catch(error) {
      alert(`Ошибка при оформлении заказа :(  Ошибка: ${error}`)
    }
  }

  return (
    <div className={`${DrawerStyles.overlay} ${isCart ? DrawerStyles.overlayVisible : ''} `}>
      <div className={DrawerStyles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина <img className="cu-p" src={remove} alt="Remove" onClick={onCloseCart}/>
        </h2>
        {
          cartItems.length > 0 
          ? 
            <div className={DrawerStyles.cartBlock}>
                <div className={DrawerStyles.items}>
                {
                  cartItems.map((item, i) => {
                    return <div key={i} className= {`${DrawerStyles.cartItem} d-flex align-center`}>
                    <div
                      style={ {backgroundImage: `url(${require(`/test-react/react-sneackers/src/components/img/sneakers/${item.url}`).default})`}}
                      className={DrawerStyles.cartItemImg}>
                      </div>

                    <div className="mr-20 flex">
                      <p className="mb-5">{item.title}</p>
                      <b>{item.price} руб.</b>
                    </div>
                    <img onClick={ () => removeCard(item.id)} className={DrawerStyles.removeBtn} src={remove} alt="Remove" />
                  </div>
                })
                }
              </div>
              <div className={DrawerStyles.cartTotalBlock}>
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>{totalPrice} руб. </b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>{percentPrice} руб. </b>
                  </li>
                </ul>
                <button onClick={changeCart} className={DrawerStyles.greenButton}>
                  Оформить заказ <img src={arrow} alt="Arrow" />
                </button>
              </div>
          </div> 
          : <PositionCart 
              image={ isOrder ? active : curtain }
              title={ isOrder ? 'Заказ оформлен!' : 'Корзина пустая'} 
              description={ isOrder ? `Ваш заказ №${orders.id} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'} />
        }
      </div>
    </div>
  );
}

export default Drawer;
