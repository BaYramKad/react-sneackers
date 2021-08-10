import React from 'react'
import Card from '../../components/Card'

import styleOrders from './Order.module.scss'


export const OrderNumber = (props) => {
    console.log(props.items);
    return (
        <div className='content p-40 justify-center'>
            <span className={styleOrders.title}>{`Ваш заказ №${props.orderId}`}</span>
            <div className={`d-flex flex-wrap ${styleOrders.parent}`}>
            {
                props.items.slice(1).map((item, i) => <Card {...item}  key={i} isLoading={props.isLoading} />) 
            }
            </div>
        </div>
    )
}
