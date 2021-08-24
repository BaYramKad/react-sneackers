import AppContext from "../context"
import React from 'react'

export const useCart = () => {

    const {cartItems} = React.useContext(AppContext)
    const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + Number(sum) , 0)
    const orders = cartItems.reduce((sum, obj) => [ ...sum, obj ] , [])
    const percentPrice = Math.floor(totalPrice / 100 * 5)
    
    return {totalPrice, percentPrice, orders}
}