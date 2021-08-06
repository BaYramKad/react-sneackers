import React from 'react'
import axios from "axios"
import { OrderNumber } from './OrderNumber'
import { NavLink } from 'react-router-dom'

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
                <NavLink to="/"> 
                    <img src="./img/come-back.svg" alt="comeBack" />
                </NavLink>
                <h1 className='search-title justify-start ml-20'>Мои заказы</h1>
            </div>
            {orders.map((item, i) => <OrderNumber items={item} key={i} isLoading={isLoading} orderId={item[0]}/>) }
        </div>
    )
}

