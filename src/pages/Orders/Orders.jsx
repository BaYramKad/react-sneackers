import React from 'react'
import axios from "axios"
import { OrderNumber } from './OrderNumber'
import { NavLink } from 'react-router-dom'

import backMain from './come-back.svg'
import { PositionItems } from '../../components/PositionItems/PositionItems'

import emptyOrder from './logoOrders.png'

export const Orders = () => {
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        ( async () => {
            try {
                const {data} = await axios.get('https://60d5a9d3943aa60017768b17.mockapi.io/orders')
                setOrders(data.map((obj) => [...obj.id, ...obj.items]))
                setIsLoading(false)
            } catch(err) {
                alert(`Не удалось получить данные заказа! Ошибка: ${err}`)
            }
            
        })()
    }, [])
    return (
        <div className="content p-40 justify-center">
            <div className="d-flex align-center">
                <NavLink to={process.env.PUBLIC_URL + '/'}> 
                    <img src={backMain} alt="comeBack" />
                </NavLink>
                <h1 className='search-title justify-start ml-20'>Мои заказы</h1>
            </div>
            {orders.length <= 0 ? <PositionItems image={emptyOrder} title={ 'У вас нет заказов' } description={'Вы еще не сделали заказ'} /> : orders.map((item, i) => <OrderNumber items={item} key={i} isLoading={isLoading} orderId={item[0]}/>) }
        </div>
    )
}

