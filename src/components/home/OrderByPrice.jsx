import React from 'react'
import { useDispatch } from 'react-redux'
import {setAscendingProducts} from '../../store/slices/products.slice'
import {setDescendingProducts} from '../../store/slices/products.slice'

const OrderByPrice = () => {

    const dispatch = useDispatch()

    const handleAssending = () => {
        dispatch(setAscendingProducts())
    }

    const handleDessending = () => {
        dispatch(setDescendingProducts())
    }
  return (
    <div>
    <h3>Order by price</h3>
      <button onClick={handleAssending}>Order up</button>
      <button onClick={handleDessending}>Order button</button>
    </div>
  )
}

export default OrderByPrice
